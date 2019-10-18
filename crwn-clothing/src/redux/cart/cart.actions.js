import { CartActionsTypes } from "./cart.types"

export const toggleCartDropDown = () => {
    return {
        type: CartActionsTypes.TOGGLE_CART_DROPDOWN
    }
}