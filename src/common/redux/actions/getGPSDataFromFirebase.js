import database from '../database.js';

export default function getGPS(){
	return dispatch => {
		dispatch(getGPSRequestedAction());
		return database.ref('/').once('value', snap => {
			const gps = snap.val();
			dispatch(getGPSFulfilledAction(gps))
		})
		.catch((error) => {
			console.log(error);
			dispatch(getGPSRejectedAction());
		});
	}
}

function getGPSRequestedAction() {
  return {
    type: 'GetGPSRequested'
  };
}

function getGPSRejectedAction() {
  return {
    type: 'GetGPSRejected'
  }
}

function getGPSFulfilledAction(gps) {
  return {
    type: 'GetGPSFulfilled',
    gps
  };
}