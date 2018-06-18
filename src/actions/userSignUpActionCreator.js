import axios from 'axios'
import { USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED } from '../constants/actionTypes';

export const userSignUpSuccess = data => (
  {
    type: USER_SIGNUP_SUCCESS,
    payload: data 
  }
)

export const userSignUpFail = data => (
  {
    type: USER_SIGNUP_FAILED,
    payload: data 
  }
)

export function userSignUp(user) {
  const DUMMY_SIGNUP_URL = "http://localhost:3008/users";

  // axios.post(DUMMY_SIGNUP_URL, user)
  // .then(res => {
  //   // handleResult();
  //   console.log(res.data);
  //   console.log(userSignUpSuccess(res.data));
  //   return userSignUpSuccess(res.data);
  // });


  // const userSignUpRequest = axios.post(DUMMY_SIGNUP_URL, user)
  // .then(() => callback());

  // console.log("Action:");  
  // console.log(userSignUpRequest.value);

  // return {
  //   type: USER_SIGNUP_SUCCESS,
  //   payload: userSignUpRequest
  // };

  return dispatch => {
    return axios.post(DUMMY_SIGNUP_URL, user)
    .then(res => {
      console.log(typeof(userSignUpSuccess(res)));
      dispatch(userSignUpSuccess(res));
    })
    .catch(error => {
      dispatch(userSignUpFail(error));
    });
  }
}