import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import GetAllUserDesignsReducer from './getAllUserDesignsReducer';
import UserSignUpReducer from './userSignUpReducer';

// setuo global state
const rootReducer = combineReducers(
  { 
    form: formReducer,
    allUserDesigns: GetAllUserDesignsReducer,
    userSignUpResult: UserSignUpReducer
  }
);

export default rootReducer;
