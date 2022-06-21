import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coinReducer from './Coins';

const rootReducers = combineReducers({
  coins: coinReducer,
});
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
