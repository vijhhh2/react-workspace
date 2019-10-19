import { ShopItem } from '../../models/collection.model';

export const addItemToCart = (cartItems: ShopItem[], cartItemToAdd: ShopItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: (cartItem.quantity as number) + 1 }
            : cartItem
        ));
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}