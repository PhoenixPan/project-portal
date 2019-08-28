import { all } from 'redux-saga/effects';
import { sagas as userDesignSagas } from 'sagas/ducks/user-design';

function* appSagas() {
    yield all([...userDesignSagas]);
}

export default appSagas;
