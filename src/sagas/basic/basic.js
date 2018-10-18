import { httpGet } from 'services/common/api-service';
import { call, put } from 'redux-saga/effects';
import { DUMMY_POSTS_URL } from 'constants/config';
import { getAllUserDesignsSuccessAction } from 'actions/userDesigns';

export function* handleGetAllUserDesigns(action) {   
    const response = yield call(httpGet, DUMMY_POSTS_URL);
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
    console.log(designsJson);
    
    return yield put(getAllUserDesignsSuccessAction(designsJson));
}