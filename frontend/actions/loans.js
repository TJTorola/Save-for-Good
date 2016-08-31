export const requestLoans = () => ({
	type: "REQUEST_LOANS"
});

export const receiveLoans = loans => ({
	type: "RECEIVE_LOANS",
	loans
});