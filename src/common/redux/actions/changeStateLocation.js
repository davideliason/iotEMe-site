
export default function changeStateLocation(gpsGeoLocationAsString){
	return dispatch => {
		    // build up the anticipation
			// update state
			dispatch(setLocationFulfilledAction(gpsGeoLocationAsString))
			// alert user of error
	}
}



function setLocationFulfilledAction(gpsGeoLocationAsString){
	return {
		type: 'SetLocationFulfilled',
		gpsGeoLocationAsString 
	};
}

