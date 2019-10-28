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

export const removeItemFromCart = (cartItems: ShopItem[], cartItemToRemove: ShopItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if ((existingItem as ShopItem).quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => (
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: (cartItem.quantity as number) - 1 }
        : cartItem
    ));
}