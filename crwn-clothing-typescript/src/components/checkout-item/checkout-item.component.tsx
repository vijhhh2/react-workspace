import React from 'react';
import { connect } from 'react-redux';

import { ShopItem } from '../../models/collection.model';
import { CartActions } from '../../redux/cart/cart.types';
import { addItem, removeItem, removeItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.component.scss';

interface CheckOutItemProps {
    cartItem: ShopItem;
    addItem: (item: ShopItem) => void;
    removeItem: (item: ShopItem) => void;
    removeItemFromCart: (item: ShopItem) => void;
}

const CheckOutItem: React.FC<CheckOutItemProps> = ({cartItem, addItem ,removeItem, removeItemFromCart}) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
    </div>
    );
}

const mapDispatchToProps = (dispatch: import('redux').Dispatch<CartActions>) => ({
    addItem: (item: ShopItem) => dispatch(addItem(item)),
    removeItem: (item: ShopItem) => dispatch(removeItem(item)),
    removeItemFromCart: (item: ShopItem) => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);