import { USER_SIGNUP_SUCCESS } from '../constants/actionTypes'

export default function(state = null, action) {
  switch(action.type) {
      case USER_SIGNUP_SUCCESS:
        return action.payload;
      default:
        return state;
  }
}