import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countrysReducer from './Country';
import holidayReducer from './Holiday';

const reducer = combineReducers({
  country: countrysReducer,
  holiday: holidayReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
