import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { auth } from '../../firebase/firebase.service'
import { User } from '../../App'
import { AppState } from '../../redux/store'
import './header.component.scss'

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectHidden } from '../../redux/cart/cart.selectors'

interface IHeaderProps {
  currentUser: User | null
  hidden: boolean
}

const Header: React.FC<IHeaderProps> = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGNOUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGNIN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
)

const mapStateToProps = (state: AppState) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectHidden(state)
})

export default connect(mapStateToProps)(Header)
