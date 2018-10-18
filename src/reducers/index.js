import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserSignUpReducer from './userSignUpReducer';
import UserLoginReducer from './userLoginReducer';
import allUserDesignReducer from './userDesignReducer';

const rootReducer = combineReducers(
  { 
    form: formReducer,
    allUserDesigns: allUserDesignReducer,
    userSignUpResult: UserSignUpReducer,
    userLoginResult: UserLoginReducer
  }
);

export default rootReducer;
