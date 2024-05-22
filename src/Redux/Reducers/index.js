import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  users: userReducer,
  // user: userReducer,
});

export default rootReducer;
