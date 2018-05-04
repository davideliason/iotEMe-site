import {combineReducers} from 'redux';
import gpsDataReducer from './gpsDataReducer.js';
import locationReducer from './locationReducer.js';

const rootReducer = combineReducers({
	gps: gpsDataReducer,
	gpsGeoLocationAsString: locationReducer
});

export default rootReducer;