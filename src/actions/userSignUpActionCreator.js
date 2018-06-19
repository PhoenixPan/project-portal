import axios from 'axios'
import { USER_SIGNUP } from '../constants/actionTypes';
import store from '../store/store';

export const userSignUpData = (data, status) => (
  {
    type: USER_SIGNUP,
    payload: data,
    status
  }
)

export function userSignUp(user, redirect) {
  const DUMMY_SIGNUP_URL = "http://localhost:3008/users";


  return dispatch => {
    console.log("Dispatch:");

    dispatch(userSignUpData(user, "pending"));

    return axios.post(DUMMY_SIGNUP_URL, user)
    .then(res => { setTimeout(() => {
      dispatch(userSignUpData(res, "success"));
      redirect();
    }, 2000); 
    });
  }
}