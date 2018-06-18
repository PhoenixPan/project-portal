import { USER_SIGNUP_SUCCESS } from '../constants/actionTypes'

export default function(state = null, action) {
  switch(action.type) {
      case USER_SIGNUP_SUCCESS:
        console.log("Reducer: ");      
        console.log(action);
        return action.payload;
      default:
        return state;
  }
}