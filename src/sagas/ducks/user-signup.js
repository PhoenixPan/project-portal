import { takeLatest, call, put } from "redux-saga/effects";

import { httpPost } from "services/common/api-service";
import { userSignupLink } from "links/user-signup-link";

export const BEGIN_USER_SIGNUP = "BEGIN_USER_SIGNUP";
export const ERROR_USER_SIGNUP = "ERROR_USER_SIGNUP";
export const SUCCESS_USER_SIGNUP = "SUCCESS_USER_SIGNUP";

export function beginUserSignup() {
    return {
        type: BEGIN_USER_SIGNUP
    }
}

function successUserSignup() {
    return {
        type: SUCCESS_USER_SIGNUP
    }
}

function errorUserSignup() {
    return {
        type: ERROR_USER_SIGNUP
    }
}

export function* handleUserSignup(action) {
    const response = yield call(httpPost, userSignupLink);
    if (!response || response.error) {
        return yield put(errorUserSignup());
    }
    return yield put(successUserSignup());
}

export const sagas = [
    takeLatest(BEGIN_USER_SIGNUP, handleUserSignup)
];
