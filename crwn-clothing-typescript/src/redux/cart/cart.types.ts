import { ShopItem } from '../../models/collection.model';

export const TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export interface IToggleCartDropDownAction {
  type: typeof TOGGLE_CART_DROPDOWN;
}

export interface IAddItem {
  type: typeof ADD_ITEM;
  payload: ShopItem;
}

export interface IRemoveItem {
  type: typeof REMOVE_ITEM;
  payload: ShopItem;
}

export interface IRemoveItemFromCart {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: ShopItem;
}

export type CartActions =
  | IToggleCartDropDownAction
  | IAddItem
  | IRemoveItem
  | IRemoveItemFromCart;
