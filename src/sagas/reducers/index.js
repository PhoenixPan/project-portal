import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { allUserDesignReducer } from '../ducks/user-design';

const rootReducer = combineReducers({
    form: formReducer,
    allUserDesigns: allUserDesignReducer
});

export default rootReducer;
