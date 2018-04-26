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