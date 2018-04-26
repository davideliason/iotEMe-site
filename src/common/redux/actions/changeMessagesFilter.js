import {SET_MESSAGES_FILTER} from './actionTypes'


export default function changeMessagesFilter(filter){
	return {
		type: SET_MESSAGES_FILTER,
		filter
	};
}