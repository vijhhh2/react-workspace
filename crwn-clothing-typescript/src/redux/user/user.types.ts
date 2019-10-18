import { User } from '../../App';

// Describing the user state
export interface IUserState {
    currentUser: User | null;
}

// Describing the different ACTION NAMES available
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

interface ISetCurrentUserAction {
    type: typeof SET_CURRENT_USER;
    payload: User | null
}

export type UserActionTypes = ISetCurrentUserAction;