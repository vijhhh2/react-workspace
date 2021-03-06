import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';

import { HomePage } from './pages/homepage/home.component'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SignInAndSingUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'
import CheckOutPage from './pages/checkoutpage/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import { setCurrentUserAction } from './redux/user/user.actions'
import { currentUser } from './redux/user/user.selector';
import './App.css'

class App extends React.Component {
  unsubscribeAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
          console.log(snapShot.data())
        })
      }
      setCurrentUser(null)
    })
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSingUpPage />
            }
          />
        </Switch>
      </div>
    )
  }

  componentWillUnmount() {
    this.unsubscribeAuth()
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUserAction(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
