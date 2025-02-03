import { combineReducers } from 'redux';
import authReducer from './store/authSlice'; // Correct path to authSlice

const rootReducer = combineReducers({
  auth: authReducer,
  // Other reducers can be added here
});

export default rootReducer;
