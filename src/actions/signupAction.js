import Swal from 'sweetalert2';
import http from '../helpers/http';
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actionTypes';
import { setItemToStorage } from '../helpers/localStorage';

const signupAction = (body) => async (dispatch) => {
  const signupRequest = () => ({ type: SIGNUP_REQUEST });
  const failure = (payload) => ({ type: SIGNUP_FAILURE, payload });
  const success = () => ({ type: SIGNUP_SUCCESS });

  dispatch(signupRequest());
  try {
    const { data } = await http('post', '/auth/signup', body);
    const {
      data: { token, firstname, lastname }
    } = data;
    setItemToStorage({ token, name: `${firstname} ${lastname}` });
    Swal.fire(
      {
        title: 'Signup successful',
        type: 'success',
        timer: 1600
      }
    );
    dispatch(success());
  } catch (err) {
    const { response: { data: { error } } } = err;
    dispatch(failure(error));
  }
};

export default signupAction;
