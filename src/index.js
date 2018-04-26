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
console.log(store.getState());
ReactDOM.render(<AppContainer />, document.getElementById('root'));

