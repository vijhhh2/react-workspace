import { ShopActionsTypes } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    error: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionsTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionsTypes.FETCH_COLLECTIONS_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;