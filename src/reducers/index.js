import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import GetAllUserDesignsReducer from './getAllUserDesignsReducer';

// setuo global state
const rootReducer = combineReducers(
  { 
    form: formReducer,
    allUserDesigns: GetAllUserDesignsReducer
  }
);

export default rootReducer;
