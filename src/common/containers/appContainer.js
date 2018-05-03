import App from '../../App.js';
import {connect} from 'react-redux';
import addGPS from '../redux/actions/addGPS.js';
import getGPS from '../redux/actions/getGPS.js';

import changeGPSFilter from '../redux/actions/changeGPSFilter.js';
import changeMessagesFilter from '../redux/actions/changeMessagesFilter.js';

function mapStateToProps(state){
	return {
		gps: state.gps, // obj
		messages: state.messages, // obj
		gpsFilter: state.gpsfilter, // str
		messagesFilter: state.messagesfilter //str
	}
}

const appContainer = connect(mapStateToProps)(App);


export default appContainer;
