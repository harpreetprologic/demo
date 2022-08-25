import {SET_LOADING, LOAD_USER_DETAILS, LOGOUT} from '../types';

export const setLoading = payload => ({
  type: SET_LOADING,
  payload,
});

export const setUserDetails = payload => ({
  type: LOAD_USER_DETAILS,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});
