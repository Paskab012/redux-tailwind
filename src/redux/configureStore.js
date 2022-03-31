import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/actions';

const itemReducer = combineReducers({
  reducer,
});

const store = createStore(
  itemReducer,
  applyMiddleware(logger, thunk),
);

export default store;
