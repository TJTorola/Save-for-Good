const receiveErrors = (state, errors) => {
	let id = 0;
	state.forEach(error => {
		if (error.id >= id) { id = error.id + 1; }
	});

	errors = errors.map(error => ({
		id: id++,
		message: error
	}));

	return [...state, ...errors];
};

const removeError = (state, id) => {
	let newState = [];
	state.forEach(error => {
		if (error.id !== id) { newState.push(error); }
	});
	return newState;
}

export default (state = [], action) => {
	switch (action.type) {
		case "RECEIVE_ERRORS":
			return receiveErrors(state, action.errors);
		case "REMOVE_ERROR":
			return removeError(state, action.id);
		default:
			return state;
	}
};