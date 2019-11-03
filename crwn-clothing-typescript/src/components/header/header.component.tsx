import React from 'react'
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { auth } from '../../firebase/firebase.service'
import { User } from '../../App'
import { AppState } from '../../redux/store'
import './header.component.scss'

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';

interface IHeaderProps {
  currentUser: User | null
  hidden: boolean
}

const Header: React.FC<IHeaderProps> = ({ currentUser, hidden }) => (
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
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
)

const mapStateToProps = (state: AppState) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectHidden(state)
})

export default connect(mapStateToProps)(Header)
