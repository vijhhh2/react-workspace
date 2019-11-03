import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { hidden } from '../../redux/cart/cart.selectors';
import { currentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            SIGNOUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">
            SIGNIN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {
        hidden?null:<CartDropDown />
      }
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUser,
  hidden: hidden
})

export default connect(mapStateToProps)(Header)
