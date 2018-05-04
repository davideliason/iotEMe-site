export default function locationReducer(state="testlocationstring",action){
	switch(action.type){

		case 'SetLocationFulfilled': 
		  return action.gpsGeoLocationAsString

		default:
			return state;
	}
}



