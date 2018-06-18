import axios from 'axios'
import { USER_SIGNUP } from '../constants/actionTypes';
import store from '../store/store';

export const userSignUpData = (data, status) => (
  {
    type: USER_SIGNUP,
    payload: data,
    status: status
  }
)

export function userSignUp(user) {
  const DUMMY_SIGNUP_URL = "http://localhost:3008/users";

  store.dispatch(userSignUpData(user, "pending"));
  
  return axios.post(DUMMY_SIGNUP_URL, user)
  .then(res => { setTimeout(() => {
    store.dispatch(userSignUpData(res, "success"));
  }, 2000); 
  });

  // return dispatch => {
  //   return axios.post(DUMMY_SIGNUP_URL, user)
  //   .then(res => {
  //     console.log("AC: ");
  //     console.log(typeof(userSignUpSuccess(res)));
  //     dispatch(userSignUpSuccess(res));
  //   })
  //   .catch(error => {
  //     dispatch(userSignUpFail(error));
  //   });
  // }
}