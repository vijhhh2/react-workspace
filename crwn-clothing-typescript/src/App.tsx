import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { HomePage } from './pages/homepage/homepage.component'
import ShopsPage from './pages/shoppage/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.service'
import { setCurrentUser } from './redux/user/user.actions'
import './App.css'
import { AppState } from './redux/store'

export interface User {
  id: string
  email: string
  displayName: string
  createdAt: Date
}

export interface State {
  user: User | null
}

interface Props {
  currentUser: User | null
  setCurrentUser: (d: User | null) => void
}

class App extends React.Component<Props, State> {
  authSubscription: firebase.Unsubscribe | null = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.authSubscription = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        ;(userRef as firebase.firestore.DocumentReference).onSnapshot(
          snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...(snapshot.data() as {
                email: string
                displayName: string
                createdAt: Date
              }),
            })
            console.log(snapshot.data())
          }
        )
      }
      setCurrentUser(null)
    })
  }
  render() {
    const { currentUser } = this.props
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopsPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    )
  }
  componentWillUnmount() {
    ;(this.authSubscription as () => void)()
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user)),
})

const mapStateToProps = ({ user }: AppState) => ({
  currentUser: user.currentUser,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
