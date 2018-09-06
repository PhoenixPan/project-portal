import axios from 'axios'
import { USER_SIGNUP } from '../constants/actionTypes';
import { DUMMY_SIGNUP_URL } from '../constants/config';

export const userSignUpData = (data, status) => (
  {
    type: USER_SIGNUP,
    payload: data,
    status
  }
)

export function userSignUp(user, redirect) {

  return dispatch => {

    dispatch(userSignUpData(user, "pending"));

    const request = axios.post(DUMMY_SIGNUP_URL, user);
    return request.then(
      res => { 
        dispatch(userSignUpData(res, "success"));
        redirect();
      });
      
    
    // return request.then(res => { setTimeout(() => 
    //   {
    //     dispatch(userSignUpData(res, "success"));
    //     redirect();
    //   }, 2000); 
    // });
  }
}