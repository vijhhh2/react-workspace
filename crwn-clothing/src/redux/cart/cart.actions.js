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