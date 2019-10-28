import { CartActionsTypes } from "./cart.types"

export const toggleCartDropDown = () => {
    return {
        type: CartActionsTypes.TOGGLE_CART_DROPDOWN
    }
}

export const addItem = (item) => {
    return {
        type: CartActionsTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: CartActionsTypes.REMOVE_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item) => {
    return {
        type: CartActionsTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}