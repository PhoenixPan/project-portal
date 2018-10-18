import { all, takeLatest } from 'redux-saga/effects';
import { GET_ALL_USER_DESIGNS } from 'constants/actionTypes';
import { handleGetAllUserDesigns } from 'sagas/basic/basic';

function* appSagas() {
    yield all([takeLatest(GET_ALL_USER_DESIGNS, handleGetAllUserDesigns)]);
}

export default appSagas;
