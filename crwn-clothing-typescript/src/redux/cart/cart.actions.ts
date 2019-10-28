import { CartActions, TOGGLE_CART_DROPDOWN, ADD_ITEM, REMOVE_ITEM, REMOVE_ITEM_FROM_CART } from "./cart.types";
import { ShopItem } from "../../models/collection.model";

export const toggleDropDown = (): CartActions => ({
    type: TOGGLE_CART_DROPDOWN
})

export const addItem = (item: ShopItem): CartActions => ({
    type: ADD_ITEM,
    payload: item
})

export const removeItem = (item: ShopItem): CartActions => ({
    type: REMOVE_ITEM,
    payload: item
})

export const removeItemFromCart = (item: ShopItem): CartActions => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
})
