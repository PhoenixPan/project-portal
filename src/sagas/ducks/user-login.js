export const USER_LOGIN = "USER_LOGIN";

export function loginUser(loginInfo, redirect) {
    return dispatch => {
        dispatch({
            type: USER_LOGIN,
            payload: {},
            result: "success"
        });
        redirect();
    };
}

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, ...action };
        default:
            return state;
    }
};
