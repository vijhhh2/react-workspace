import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { AppState } from '../../redux/store';
import './cart-dropdown.component.scss';
import { ShopItem } from '../../models/collection.model';
import { selectCartItems } from '../../redux/cart/cart.selectors';

interface ICartDropDownProps {
    cartItems: ShopItem[];
}

const CartDropDown: React.FC<ICartDropDownProps> = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state: AppState) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);