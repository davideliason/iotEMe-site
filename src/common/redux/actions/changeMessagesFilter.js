export default function changeMessagesFilter(filter){
	return {
		type: 'SET_MESSAGES_FILTER',
		filter
	};
}