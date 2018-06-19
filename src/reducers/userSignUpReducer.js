import { USER_SIGNUP } from '../constants/actionTypes'

export default function(state = {}, action) {
  
  switch(action.type) {
      case USER_SIGNUP:
        if (action.status === "success") {
          console.log("Reducer success: ");      
          console.log(action);      
          return {...state, ...action};
        }
        else if (action.status === "pending") {
          console.log("Reducer pending: ");      
          console.log(action);      
          return {...state, ...action};
        }
        break;
      default:
        return state;
  }
}