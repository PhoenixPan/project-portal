import { USER_SIGNUP } from '../constants/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
      case USER_SIGNUP:
      // console.log(action.state);
      if (action.status === "success") {
        console.log("Reducer success: ");      
        return {...state, ...action};
      }
      else if (action.status === "pending") {
        console.log("Reducer pending: ");      
        return {...state, ...action};
      }
      break;
      default:
        return state;
  }
}