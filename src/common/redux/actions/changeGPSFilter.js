import {SET_GPS_FILTER} from './actionTypes'

export default function changeGPSFilter(filter){
	return {
		type: SET_GPS_FILTER,
		filter
	};
}