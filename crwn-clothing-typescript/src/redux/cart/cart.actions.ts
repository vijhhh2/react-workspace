import { CartActions, TOGGLE_CART_DROPDOWN, ADD_ITEM } from "./cart.types";
import { ShopItem } from "../../models/collection.model";

export const toggleDropDown = (): CartActions => ({
    type: TOGGLE_CART_DROPDOWN
})

export const addItem = (item: ShopItem): CartActions => ({
    type: ADD_ITEM,
    payload: item
})