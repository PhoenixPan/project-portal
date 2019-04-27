import axios from "axios";

import { DUMMY_SIGNUP_URL } from "constants/config";

export const USER_SIGNUP = "USER_SIGNUP";

export const userSignUpData = (data, status) => ({
    type: USER_SIGNUP,
    payload: data,
    status
});

export function userSignUp(user, redirect) {
    //TODO
}

export const userSignUpReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP:
            if (action.status === "success") {
                return { ...state, ...action };
            } else if (action.status === "pending") {
                return { ...state, ...action };
            }
            break;
        default:
            return state;
    }
}