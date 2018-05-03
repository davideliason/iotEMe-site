import {combineReducers} from 'redux';
import gpsReducer from './gpsReducer.js';

const rootReducer = combineReducers({
	gps: gpsReducer,
});

export default rootReducer;