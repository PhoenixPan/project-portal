import { GET_ALL_USER_DESIGNS } from '../constants/actionTypes'

export default function(state = null, action) {
  switch(action.type) {
      case GET_ALL_USER_DESIGNS:
        if (action.payload.status === 200) {
          var designsJson = {};
          var designObjectsArray = action.payload.data;
          for (var key in designObjectsArray) {
            if (designObjectsArray.hasOwnProperty(key)) {
              designsJson[designObjectsArray[key].id] = designObjectsArray[key];              
            }
          }
          return designsJson;
        };
        break;
      default:
        return state;
  }
}