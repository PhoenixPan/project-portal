//import axios from 'axios'
import { USER_LOGIN } from '../constants/actionTypes';

export function loginUser(loginInfo, redirect) {

  // authentication and get token 

  // var result = { result: "success" };

  return dispatch =>　{
    dispatch(
    {
      type: USER_LOGIN,
      payload: {},
      result: "success"
    });
    redirect();
  };
}