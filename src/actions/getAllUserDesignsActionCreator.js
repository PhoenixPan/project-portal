import axios from 'axios'

export const GET_ALL_USER_DESIGNS = "GET_ALL_USER_DESIGNS"

export function getAllUserDesigns() {
  const DUMMY_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
  const getAllUserDesignsRequest = axios.get(DUMMY_POSTS_URL);
  
  return {
    type: GET_ALL_USER_DESIGNS,
    payload: getAllUserDesignsRequest 
  };
}