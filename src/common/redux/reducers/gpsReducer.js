export default function gpsReducer(state={},action){
	switch(action.type){

		case 'GetGPSRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		}

		case 'GetGPSRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'GetGPSFulfilled': {
			// grab gps data payload from action
			const {gps} = action.gps;
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

		case 'AddGPSRequested': {
			return Object.assign({},state,{
				inProgress: true,
				error: false
			});
		} 

		case 'AddGPSRejected': {
			return Object.assign({},state,{
				inProgress: false,
				error: true
			});
		}

		case 'AddGPSFulfilled': {
			return Object.assign({},state,{
				inProgress: false,
				error: false
			});
		}

		default:
			return state;
	}
}