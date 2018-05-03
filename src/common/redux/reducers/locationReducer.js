export default function locationReducer(state="",action){
	switch(action.type){

		case 'SetLocationRequested': 
		  return action.location

		default:
			return state;
	}
}