import { CartActions, TOGGLE_CART_DROPDOWN, ADD_ITEM, REMOVE_ITEM, REMOVE_ITEM_FROM_CART } from "./cart.types"
import { ShopItem } from "../../models/collection.model"
import { addItemToCart, removeItemFromCart } from './cart.service';


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
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer;