import App from '../../App.js';
import {connect} from 'react-redux';
import addGPSDataToFirebase from '../redux/actions/addGPSDataToFirebase.js';
import getGPSDataFromFirebase from '../redux/actions/getGPSDataFromFirebase.js';

function mapStateToProps(state){
	return {
		gps: state.gps, // obj
		location: state.location //str
	}
}

const appContainer = connect(mapStateToProps)(App);


export default appContainer;
