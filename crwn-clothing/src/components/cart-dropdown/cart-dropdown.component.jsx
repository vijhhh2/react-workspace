import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { cartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropDown } from '../../redux/cart/cart.actions';

import './cart-dropdown.component.scss';


const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length
            ?cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            :<span className='empty-text'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartDropDown());
        }} >CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => (
    {
        cartItems: cartItems(state)
    }
)

export default withRouter(connect(mapStateToProps)(CartDropDown));