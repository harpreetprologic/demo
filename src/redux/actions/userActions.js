import {SET_LOADING, LOAD_USER_DETAILS, LOGOUT} from '../types';

export const setLoading = payload => ({
    type: SET_LOADING,
    payload
})

export const setUserDetails = ({firstName, lastName, token}) => ({
    type: LOAD_USER_DETAILS,
    payload: {firstName, lastName, token}
})

export const logout = () => ({
    type: LOGOUT
})