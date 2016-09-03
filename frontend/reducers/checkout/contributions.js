export default (state = [], action) => {
	switch (action.type) {
		case "ADD_CONTRIBUTION":
			let newState = Array.from(state)
			newState.push(action.contribution);
			return newState;
		default:
			return state;
	}
};