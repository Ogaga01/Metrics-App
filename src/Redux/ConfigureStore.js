import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({

});
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
