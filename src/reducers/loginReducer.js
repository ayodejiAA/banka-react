import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from '../actionTypes';

const initialState = { loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: ''
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
