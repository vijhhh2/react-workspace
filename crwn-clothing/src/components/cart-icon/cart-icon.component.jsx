import React from 'react';
import { connect } from 'react-redux';

import { toggleCartDropDown } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import './cart-icon.component.scss';

const CartIcon = ({toggleCartDropDown}) => (
    <div className='cart-icon' onClick={toggleCartDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropDown: () => dispatch(toggleCartDropDown())
})

export default connect(null, mapDispatchToProps)(CartIcon);