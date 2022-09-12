import {combineReducers} from 'redux';
import { countReducer } from './operations';

var reducer = combineReducers({
    countReducer,
});

export default reducer;