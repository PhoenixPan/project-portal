import axios from 'axios'
import { GET_ALL_USER_DESIGNS } from '../constants/actionTypes';
import { DUMMY_POSTS_URL } from '../constants/config';

export function getAllUserDesigns() {
  const getAllUserDesignsRequest = axios.get(DUMMY_POSTS_URL);

  return {
    type: GET_ALL_USER_DESIGNS,
    payload: getAllUserDesignsRequest 
  };
}