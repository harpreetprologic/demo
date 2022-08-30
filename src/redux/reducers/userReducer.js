import AsyncStorage from '@react-native-async-storage/async-storage';
import {SET_LOADING, LOAD_USER_DETAILS, LOGOUT} from '../types';

const initialState = {
  userDetails: null,
  isLoading: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case LOAD_USER_DETAILS:
      const newUserDetails = {...(state.userDetails ?? {}), ...payload};
      AsyncStorage.setItem('user', JSON.stringify(newUserDetails));
      return {
        ...state,
        userDetails: newUserDetails,
      };
    case LOGOUT:
      AsyncStorage.removeItem('user');
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
