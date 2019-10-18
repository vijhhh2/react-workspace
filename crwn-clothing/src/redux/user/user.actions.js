import { UserActionsTypes } from "./user.types"

export const setCurrentUserAction = (user) => {
    return {
        type: UserActionsTypes.SET_CURRENT_USER,
        payload: user
    }
}