import {combineReducers} from 'redux';
import gpsFilterReducer from './gpsFilterReducer.js';
import messagesFilterReducer from './gpsFilterReducer.js';
import messagesReducer from './messagesReducer.js';
import gpsReducer from './gpsReducer.js';

const rootReducer = combineReducers({
	gpsfilter: gpsFilterReducer,
	messagesfilter: messagesFilterReducer,
	gps: gpsReducer,
	messages: messagesReducer
});

export default rootReducer;