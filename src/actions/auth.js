import axios from 'axios';

export const signUp = (username, password) => {
  return async (dispatch) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, {
      username,
      password, 
    });

    dispatch({
      type: 'USER_SIGNUP',
    });
  };
};

export const signIn = (username, password) => {
  return async (dispatch) => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signin`, {
      username,
      password, 
    }, {
      withCredentials: true,
    });

    dispatch({
      type: 'USER_SIGNIN',
      user: username,
    });
  };
};