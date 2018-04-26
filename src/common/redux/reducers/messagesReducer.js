export default function messagesReducer(state={},action){
	switch(action.type){
		case 'messageAdded': {
			const newState = Object.assign({},state);
			newState.messages = newState.messages || [];
			newState.messages = newState.messages.slice();
			newState.messages.push(action.message);
			return newState;
		}
		default:
			return state;
	}
}

