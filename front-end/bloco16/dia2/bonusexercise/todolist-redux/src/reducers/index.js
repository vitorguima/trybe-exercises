import { combineReducers } from 'redux';
import listAddReducer from './listAddReducer';
import inputTaskReducer from './inputTaskReducer';

const rootReducer = combineReducers({ 
  listAddReducer,
  inputTaskReducer,
});

export default rootReducer;