export default function messagesReducer(state={},action){
	switch(action.type){
		case 'messageAdded': {
			const newState = Object.assign({},state);
			newState.messages = newState.messages || [];
			// copy original state to not change it
			newState.messages = newState.messages.slice();
			// add new data payload to array and set state
			newState.messages.push(action.message);
			return newState;
		}
		default:
			return state;
	}
}

