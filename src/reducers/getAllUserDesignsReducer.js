import { GET_ALL_USER_DESIGNS } from '../actions/getAllUserDesignsActionCreator'

export default function(state = null, action) {
  switch(action.type) {
      case GET_ALL_USER_DESIGNS:
        if (action.payload.status === 200) {
          return action.payload.data;
        };
        break;
      default:
        return state;
  }
}