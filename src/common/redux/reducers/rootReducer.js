import {combineReducers} from 'redux';
import gpsReducer from './gpsReducer.js';
import locationReducer from './locationReducer.js';

const rootReducer = combineReducers({
	gps: gpsReducer,
	location: locationReducer
});

export default rootReducer;