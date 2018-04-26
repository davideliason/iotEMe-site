import database from '../database.js';

export default function addGPS(userID,time,latitude,longitude){
	return dispatch => {
		dispatch(addGPSRequestAction());
		// grab the gps db object
		const gpsRef = database.ref('/gps');
		// push new object into array
		gpsRef.push({
			userID,
			time,
			latitude,
			longitude
		})
		.then(() => {
			dispatch(addGPSFulfilledAction())
		})
		.catch((error) => {
			console.log(error);
			dispatch(addGPSRejectedAction());
		});
	}
}

function addGPSRequestAction(){
	return {
		type: 'AddGPSRequested'
	}
}

function addGPSRejectedAction(){
	return {
		type: 'AddGPSRejected'
	}
}

function addGPSFulfilledAction(){
	return {
		type: 'AddGPSFulfilled'
	}
}