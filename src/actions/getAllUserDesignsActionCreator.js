import axios from 'axios'
import { GET_ALL_USER_DESIGNS } from '../constants/actionTypes';

export function getAllUserDesigns() {
  const DUMMY_POSTS_URL = "http://localhost:3008/posts";
  const getAllUserDesignsRequest = axios.get(DUMMY_POSTS_URL);
  
  return {
    type: GET_ALL_USER_DESIGNS,
    payload: getAllUserDesignsRequest 
  };
}