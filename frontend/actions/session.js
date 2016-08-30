export const createSession = user => ({
	type: "CREATE_SESSION",
	user
});

export const destroySession = () => ({
	type: "DESTROY_SESSION"
});