import React from 'react';
import { connect } from 'react-redux';

import { toggleDropDown } from '../../redux/cart/cart.actions';
import { IToggleCartDropDownAction } from '../../redux/cart/cart.types';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import './cart-icon.component.scss';

interface ICartIconProps {
    toggleDropDown: () => IToggleCartDropDownAction;
}

const CartIcon: React.FC<ICartIconProps> = ({toggleDropDown}) => (
    <div className='cart-icon' onClick={toggleDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch: import('redux').Dispatch) => ({
    toggleDropDown: () => dispatch(toggleDropDown())
})

export default connect(null, mapDispatchToProps)(CartIcon);