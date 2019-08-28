import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import { allUserDesignReducer } from 'sagas/ducks/user-design';
import history from 'store/history';

const rootReducer = combineReducers({
    router: connectRouter(history),
    form: formReducer,
    allUserDesigns: allUserDesignReducer
});

export default rootReducer;
