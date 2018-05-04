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

function mapDispatchToProps(dispatch){
	return {
		addGPSDataToFirebase : (latitude,longitude) => dispatch(addGPSDataToFirebase(latitude,longitude)),
		getGPSDataFromFirebase : () => dispatch(getGPSDataFromFirebase())
	}
}

const appContainer = connect(mapStateToProps,mapDispatchToProps)(App);


export default appContainer;
