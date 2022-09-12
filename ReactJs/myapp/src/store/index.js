import reducer from '../reducers/root';
import { createStore } from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

var store = applyMiddleware(thunk)(createStore)(reducer);

export default store;