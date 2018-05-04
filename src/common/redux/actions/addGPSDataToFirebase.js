import database from '../database.js';

export default function addGPSDataToFirebase(latitude,longitude){
	return dispatch => {
		dispatch(addGPSDataRequestAction());
		// grab the gps db object
		const gpsRef = database.ref('/gps');
		// random numbers no longer useful, will grab from pubnub

		// function getRandomInt(max) {
 	// 		 return Math.floor(Math.random() * Math.floor(max));
		// 	}

		// const latitude = getRandomInt(60);  // b/w -90 and 90 for real
		// const longitude = getRandomInt(100); // b/w -180 and 180 for real
		// push new object into array
		gpsRef.push({
			latitude,
			longitude
		})
		.then(() => {
			console.log("new data obj pushed");
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