import { CartActions, TOGGLE_CART_DROPDOWN, ADD_ITEM } from "./cart.types"
import { ShopItem } from "../../models/collection.model"
import { addItemToCart } from './cart.service';


export interface ICartState {
    hidden: boolean;
    cartItems: ShopItem[];
} 

const INITIAL_STATE: ICartState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action: CartActions) => {
    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;