import { IUserState, UserActionTypes, SET_CURRENT_USER } from "./user.types"

const INITIAL_STATE: IUserState = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action: UserActionTypes ) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
         default:
            return state;
    }
}

export default userReducer;