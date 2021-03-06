import { createSelector } from 'reselect';

const cart = state => state.cart;

export const cartItems = createSelector([cart], (cart) => cart.cartItems);

export const hidden = createSelector([cart], (cart) => cart.hidden); 

export const itemCount = createSelector([cartItems], (cartItems) => {
    return cartItems.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity, 0);
});

export const selectTotalAmount = createSelector([cartItems], (cartItems) => {
    return cartItems.reduce((accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity * cartItem.price, 0);
});
