import axios from 'axios';
import { ActionTypes} from '../Containers/actionTypes';

export const fetchUserRequest = () => {
  return {
    type: ActionTypes.FETCH_USER_REQUEST,
  }
}

export const fetchUserSuccess = (data) => {
  return {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload: data,
  }
}

export const fetchUserError = (error) => {
  return {
    type: ActionTypes.FETCH_USERS_FAILURE,
    payload: error.message,
  }
}


export const fetchUsers = () => async dispatch => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const response = await axios.get('https://lionfish-app-qkntx.ondigitalocean.app/api/users/');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

export const fetchUser = (id) => async dispatch => {
  dispatch({ type: 'FETCH_USER_REQUEST' });
  try {
    const response = await axios.get(`https://lionfish-app-qkntx.ondigitalocean.app/api/user/${id}`);
    dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
  }
};

export const editUser = (id, userData) => async dispatch => {
  dispatch({ type: 'EDIT_USER_REQUEST' });
  try {
    const response = await axios.patch(`https://lionfish-app-qkntx.ondigitalocean.app/api/user/${id}`, userData);
    dispatch({ type: 'EDIT_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'EDIT_USER_FAILURE', payload: error.message });
  }
};
