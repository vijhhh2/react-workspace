import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartDropDown } from '../../redux/cart/cart.actions';
import { itemCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import './cart-icon.component.scss';

const CartIcon = ({toggleCartDropDown, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropDown: () => dispatch(toggleCartDropDown())
})

const mapStateToProps = createStructuredSelector({
    itemCount: itemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);