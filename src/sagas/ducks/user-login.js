export const USER_LOGIN = "USER_LOGIN";

export function loginUser(loginInfo, redirect) {
    // authentication and get token

    // var result = { result: "success" };

    return dispatch => {
        dispatch({
            type: USER_LOGIN,
            payload: {},
            result: "success"
        });
        redirect();
    };
}
