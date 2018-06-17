import axios from 'axios'

export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS"
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED"

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

export function userSignUp(user, callback) {
  const DUMMY_SIGNUP_URL = "http://localhost:3008/users";
  const userSignUpRequest = axios.post(DUMMY_SIGNUP_URL, user)
  .then(() => callback());
  console.log(userSignUpRequest);
  return {
    type: USER_SIGNUP_SUCCESS,
    payload: userSignUpRequest
  };

  // axios.post(DUMMY_SIGNUP_URL, user)
  // .then(res => {
  //   // handleResult();
  //   console.log(res.data);
  //   return userSignUpSuccess(res.data);
  // });
}