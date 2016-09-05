export const addContribution = contribution => ({
	type: "ADD_CONTRIBUTION",
	contribution
});

export const setStep = step => ({
	type: "SET_STEP",
	step
});

export const setDonation = percent => ({
	type: "SET_DONATION",
	percent
});