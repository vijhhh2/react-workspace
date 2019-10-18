import { ICartState, CartActions, TOGGLE_CART_DROPDOWN } from "./cart.types"

const INITIAL_STATE: ICartState = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action: CartActions) => {
    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;