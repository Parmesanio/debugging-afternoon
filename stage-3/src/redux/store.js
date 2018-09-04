import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';

const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));

export default store;