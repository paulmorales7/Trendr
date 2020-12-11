import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import entry from './entry';

export default combineReducers({
  alert,
  auth,
  entry
});
