import Swal from 'sweetalert2';
import http from '../helpers/http';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes';
import { setItemToStorage } from '../helpers/localStorage';

const loginAction = (body) => async (dispatch) => {
  const loginRequest = () => ({ type: LOGIN_REQUEST });
  const failure = (payload) => ({ type: LOGIN_FAILURE, payload });
  const success = () => ({ type: LOGIN_SUCCESS });

  dispatch(loginRequest());
  try {
    const { data } = await http('post', '/auth/login', body);
    const {
      data: { token, firstname, lastname }
    } = data;
    setItemToStorage({ token, name: `${firstname} ${lastname}` });
    Swal.fire(
      {
        title: 'Login successful',
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

export default loginAction;

