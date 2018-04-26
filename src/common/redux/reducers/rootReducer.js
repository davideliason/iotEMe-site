import {combineReducers} from 'redux';
import gpsFilterReducer from './gpsFilterReducer.js';
import messagesFilterReducer from './gpsFilterReducer.js';

const rootReducer = combineReducers({
	gpsfilter: gpsFilterReducer,
	messagesfilter: messagesFilterReducer
});

export default rootReducer;