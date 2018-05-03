import database from '../database.js';

export default function getGPSDataFromFirebase(){
	return dispatch => {
		dispatch(getGPSDataRequestedAction());
		return database.ref('/').once('value', snap => {
			const gps = snap.val();
			dispatch(getGPSDataFulfilledAction(gps))
		})
		.catch((error) => {
			console.log(error);
			dispatch(getGPSDataRejectedAction());
		});
	}
}

function getGPSDataRequestedAction() {
  return {
    type: 'GetGPSDataRequested'
  };
}

function getGPSDataRejectedAction() {
  return {
    type: 'GetGPSDataRejected'
  }
}

function getGPSDataFulfilledAction(gps) {
  return {
    type: 'GetGPSDataFulfilled',
    gps
  };
}