const gpsFilterReducer = (state='SHOW_ALL', action) => {
	switch (action.type){
		case 'SET_GPS_FILTER':
			return action.filter
		default:
			return state
	}
}

export default gpsFilterReducer