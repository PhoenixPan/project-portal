import { USER_SIGNUP } from '../constants/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
      case USER_SIGNUP:
      console.log(action.state);
      if (action.state === "success") {
        console.log("Reducer success: ");      
        console.log(action);
        return action.payload;
      }
      else if (action.state === "pending") {
        console.log("Reducer pending: ");      
        return { "data": "pending" };
      }
      break;
      default:
        return state;
  }
}