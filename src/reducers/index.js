import { combineReducers } from 'redux';
import GetAllUserDesignsReducer from './getAllUserDesignsReducer';

// setuo global state
const rootReducer = combineReducers(
  { 
    allUserDesigns: GetAllUserDesignsReducer
  }
);

export default rootReducer;
