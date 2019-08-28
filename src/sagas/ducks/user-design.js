import { takeLatest, call, put } from 'redux-saga/effects';

import { httpGet } from 'services/common/api-service';
// import { DUMMY_POSTS_URL } from "config";

export const GET_ALL_USER_DESIGNS = 'GET_ALL_USER_DESIGNS';
export const GET_ALL_USER_DESIGNS_SUCCESS = 'GET_ALL_USER_DESIGNS_SUCCESS';

export const getAllUserDesigns = () => ({
    type: GET_ALL_USER_DESIGNS
});

export const getAllUserDesignsSuccessAction = allUserDesigns => ({
    type: GET_ALL_USER_DESIGNS_SUCCESS,
    allUserDesigns: allUserDesigns
});

export function* handleGetAllUserDesigns(action) {
    const response = yield call(httpGet, 'DUMMY_POSTS_URL');
    if (!response || response.error) {
        // to be handled
    }
    var designsJson = {};
    var designObjectsArray = response.data;
    for (var key in designObjectsArray) {
        if (designObjectsArray.hasOwnProperty(key)) {
            designsJson[designObjectsArray[key].id] = designObjectsArray[key];
        }
    }

    return yield put(getAllUserDesignsSuccessAction(designsJson));
}

export const allUserDesignReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_USER_DESIGNS_SUCCESS:
            return action.allUserDesigns;
        default:
            return null;
    }
};

export const sagas = [takeLatest(GET_ALL_USER_DESIGNS, handleGetAllUserDesigns)];
