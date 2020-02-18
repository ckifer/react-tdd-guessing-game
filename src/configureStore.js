import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  success: false
};

export default createStore(rootReducer, initialState);
