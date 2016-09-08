export default (state = [], action) => {
	switch (action.type) {
		case "RECEIVE_LOANS":
			return [...state, ...action.loans];
		case "CLEAR_LOANS":
			return [];
		default:
			return state;
	}
};