import { USER_LOGIN } from "sagas/ducks/user-login";

export default function(state = {}, action) {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, ...action };
        default:
            return state;
    }
}
