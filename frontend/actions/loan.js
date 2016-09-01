export const requestLoan = () => ({
	type: "REQUEST_LOAN"
});

export const receiveLoan = loan => ({
	type: "RECEIVE_LOAN",
	loan
});