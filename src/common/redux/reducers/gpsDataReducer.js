export default function gpsDataReducer(state={},action){
	switch(action.type){

		case 'GetGPSDataRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		}

		case 'GetGPSDataRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'GetGPSDataFulfilled': {
			// grab gps data payload from within wrapper gps obj
			const {gps} = action.gps;
			console.log({gps});
			const newState = Object.assign({},state,{
				inProgress: false,
				error: false
			});
			// populate the new state of gps data
			// reset data array
			newState.gps = [];
			if(gps){
				// hydrate array with new data
				newState.gps = Object.keys(gps).map(k => gps[k]);
			}
			return newState
		}

		case 'AddGPSDataRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		} 

		case 'AddGPSDataRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'AddGPSDataFulfilled': {
			return Object.assign({},state,{
				inProgress: false,
				error: false
			});
		}

		default:
			return state;
	}
}