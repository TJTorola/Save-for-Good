export default (state = [], action) => {
	switch (action.type) {
		case "RECEIVE_LOANS":
			return [...state, ...action.loans];
		default:
			return state;
	}
};