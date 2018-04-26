import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './common/containers/appContainer.js';
import {applyMiddleware,createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './common/redux/reducers/rootReducer';
import addGPS from './common/redux/actions/addGPS.js';

let logger = createLogger({
	timestamp:true,
	duration:true
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk,logger));

store.dispatch(addGPS(1,"now","lat","long"));



// test action creator and reducer for messages
// store.dispatch({type: 'messageAdded',
// 				message: 'new message'
// 				});
// now test action creator and reducer for gps
// store.dispatch({
// 	type: 'gpsAdded',
// 	gps: 'portland oregon'
// });	
// test changing gps filter
// store.dispatch({
// 	type: 'SET_GPS_FILTER',
// 	filter: 'what what gps filter'
// });

// test messaages filter
// store.dispatch({
// 	type: 'SET_MESSAGES_FILTER',
// 	filter: 'what what messages filter'
// })
// print out state
console.log(store.getState());
ReactDOM.render(<AppContainer />, document.getElementById('root'));

