import { Collections } from "../../models/collection.model";
import { ShopActions, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_FAILED } from "./shop.types";

export interface ShopState {
    collections: Collections | null;
    isFetching: boolean;
    error: string;
}

const INITIAL_STATE: ShopState = {
    collections: null,
    isFetching: false,
    error: ''
};

const shopReducer = (state = INITIAL_STATE, action: ShopActions): ShopState => {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case FETCH_COLLECTIONS_FAILED:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;