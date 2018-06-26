import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import GetAllUserDesignsReducer from './getAllUserDesignsReducer';
import UserSignUpReducer from './userSignUpReducer';
import UserLoginReducer from './userLoginReducer';

const rootReducer = combineReducers(
  { 
    form: formReducer,
    allUserDesigns: GetAllUserDesignsReducer,
    userSignUpResult: UserSignUpReducer,
    userLoginResult: UserLoginReducer
  }
);

export default rootReducer;
