export default function gpsReducer(state={},action){
	switch(action.type){
		case 'gpsAdded': {
			const newState = Object.assign({},state);
			newState.gps = newState.gps || [];
			// copy original state to not change it
			newState.gps = newState.gps.slice();
			// add new data payload to array and set state
			newState.gps.push(action.gps);
			return newState;
		} 

		default:
			return state;
	}
}