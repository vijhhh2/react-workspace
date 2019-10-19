import React from 'react';
import {ShopItem} from '../../models/collection.model';

import './cart-item.component.scss';

interface ICartItemProps {
    item: ShopItem;
}

const CartItem: React.FC<ICartItemProps> = ({item: {price, imageUrl, name, quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt="item"/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;