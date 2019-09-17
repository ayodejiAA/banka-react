import { combineReducers } from 'redux';

import signup from './signupReducer';
import login from './loginReducer';


export default combineReducers({
  signup,
  login
});
