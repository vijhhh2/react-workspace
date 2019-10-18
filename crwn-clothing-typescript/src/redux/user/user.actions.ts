import { SET_CURRENT_USER } from "./user.types";
import { User } from "../../App";

export const setCurrentUser = (user: User | null) => ({
    type: SET_CURRENT_USER,
    payload: user
});