export const receiveErrors = errors => ({
	type: "RECEIVE_ERRORS",
	errors
});

export const removeError = id => ({
	type: "REMOVE_ERROR",
	id
});