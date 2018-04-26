export default function gpsReducer(state={},action){
	switch(action.type){
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

		default:
			return state;
	}
}