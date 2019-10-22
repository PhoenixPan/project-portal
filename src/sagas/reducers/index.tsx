import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import history from 'store/history';

const rootReducer = combineReducers({
    router: connectRouter(history),
    form: formReducer
});

export default rootReducer;
