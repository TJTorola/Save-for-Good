export default (state = null, action) => {
	switch (action.type) {
		case "RECEIVE_USER":
			debugger
			return action.user;
		case "REMOVE_USER":
			return null;
		default:
			return state;
	}
};