export default function gpsReducer(state={},action){
	switch(action.type){
		case 'gpsAdded': {
			const newState = Object.assign({},state);
			newState.gps = newState.gps || [];
			newState.gps = newState.gps.slice();
			newState.gps.push(action.gps);
			return newState;
		} 
		
		default:
			return state;
	}
}