import database from '../database.js';

export default function addGPSDataToFirebase(latitude,longitude){
	return dispatch => {
		dispatch(addGPSDataRequestAction());
		// grab the gps db object
		const gpsRef = database.ref('/gps');
		// push new object into array
		gpsRef.push({
			latitude,
			longitude
		})
		.then(() => {
			dispatch(addGPSDataFulfilledAction())
		})
		.catch((error) => {
			console.log(error);
			dispatch(addGPSDataRejectedAction());
		});
	}
}

function addGPSDataRequestAction(){
	return {
		type: 'AddGPSDataRequested'
	}
}

function addGPSDataRejectedAction(){
	return {
		type: 'AddGPSDataRejected'
	}
}

function addGPSDataFulfilledAction(){
	return {
		type: 'AddGPSDataFulfilled'
	}
}