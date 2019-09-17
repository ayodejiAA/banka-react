import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actionTypes';

const initialState = { loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: ''
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
