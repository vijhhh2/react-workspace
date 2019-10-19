import { ShopItem } from "../../models/collection.model";

export const TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN';
export const ADD_ITEM = 'ADD_ITEM';

export interface IToggleCartDropDownAction {
    type: typeof TOGGLE_CART_DROPDOWN;
}

export interface IAddItem {
    type: typeof ADD_ITEM,
    payload: ShopItem
}

export type CartActions = IToggleCartDropDownAction | IAddItem; 