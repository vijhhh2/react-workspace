import { createSelector } from 'reselect'

import { AppState } from '../store'
import { ShopItem } from '../../models/collection.model'

const selectCart = (state: AppState) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectItemCount = createSelector(
  [selectCartItems],
  (cartItems: ShopItem[]) => {
    return cartItems.reduce(
      (accumulatedValue, cartItem) =>
        accumulatedValue + (cartItem.quantity as number),
      0
    )
  }
);

export const selectTotalAmount = createSelector(
  [selectCartItems],
  (cartItems: ShopItem[]) => {
    return cartItems.reduce(
      (accumulatedValue, cartItem) =>
        accumulatedValue + (cartItem.quantity as number) * cartItem.price,
      0
    )
  }
);




