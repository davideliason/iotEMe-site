
export default function changeStateLocation(gpsGeoLocationAsString){
	return dispatch => {
		    // build up the anticipation
		dispatch(setLocationRequestedAction());
			// update state
			dispatch(setLocationFulfilledAction(gpsGeoLocationAsString))
		.catch((error) => {
			console.log(error);
			// alert user of error
			dispatch(setLocationRejectedAction());
		});
	}
}

function setLocationRequestedAction(){
	console.log("set location requested");
}

function setLocationFulfilledAction(gpsGeoLocationAsString){
	return {
		type: 'SetLocationFulfilled',
		gpsGeoLocationAsString
	};
}

function setLocationRejectedAction(){
	console.log("set location rejected");
}