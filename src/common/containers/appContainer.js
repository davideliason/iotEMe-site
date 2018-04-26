import App from '../../App.js';
import {connect} from 'react-redux';
import addGPS from '../redux/actions/addGPS.js';
import getGPS from '../redux/actions/getGPS.js';


function mapStateToProps(state){
	return {
		gps: state.gps,
		messages: state.messages,
		locations: state.locations
	}
}

const appContainer = connect(mapStateToProps)(App);


export default appContainer;
