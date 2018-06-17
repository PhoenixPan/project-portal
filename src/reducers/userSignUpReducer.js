import { USER_SIGNUP_SUCCESS } from '../actions/userSignUpActionCreator'

export default function(state = null, action) {
  switch(action.type) {
      case USER_SIGNUP_SUCCESS:
        return action.payload;
      default:
        return state;
  }
}