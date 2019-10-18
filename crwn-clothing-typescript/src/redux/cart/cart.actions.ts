import { CartActions, TOGGLE_CART_DROPDOWN } from "./cart.types";

export const toggleDropDown = (): CartActions => ({
    type: TOGGLE_CART_DROPDOWN
})