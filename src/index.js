import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './common/containers/appContainer.js';
import {applyMiddleware,createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './common/redux/reducers/rootReducer';

let logger = createLogger({
	timestamp:true,
	duration:true
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk,logger));

// test action creator and reducer for messages
store.dispatch({type: 'messageAdded',
				message: 'new message'
				});
// now test action creator and reducer for gps
store.dispatch({
	type: 'gpsAdded',
	gps: 'portland oregon'
});	
// test changing gps filter
store.dispatch({
	type: 'SET_FILTER',
	filter: 'what what'
})
// print out state
console.log(store.getState());
ReactDOM.render(<AppContainer />, document.getElementById('root'));

