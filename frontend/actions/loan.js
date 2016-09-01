export const requestLoan = id => ({
	type: "REQUEST_LOAN",
	id
});

export const receiveLoan = loan => ({
	type: "RECEIVE_LOAN",
	loan
});