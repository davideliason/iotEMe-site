export default function locationReducer(state="test statelocation string",action){
	switch(action.type){

		case 'SetLocationFulfilled': 
		  return action.gpsGeoLocationAsString

		default:
			return state;
	}
}



