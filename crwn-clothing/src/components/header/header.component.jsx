import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { hidden } from '../../redux/cart/cart.selectors';
import { currentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'

import './header.component.scss'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
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
      {
        hidden?null:<CartDropDown />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUser,
  hidden: hidden
})

export default connect(mapStateToProps)(Header)
