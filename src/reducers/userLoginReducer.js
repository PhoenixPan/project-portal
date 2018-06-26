import { USER_LOGIN } from '../constants/actionTypes'

export default function(state = {}, action) {
  
  switch(action.type) {
      case USER_LOGIN:
        return {...state, ...action};
      default:
        return state;
  }
}