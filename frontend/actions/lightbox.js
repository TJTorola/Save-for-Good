export const showLightbox = loan => ({
	type: "SHOW_LIGHTBOX",
	name: loan.entrepreneur.name,
	loan: {
		id: loan.id,
		amount: loan.amount,
		entrepreneurId: loan.entrepreneur.id,
		name: loan.entrepreneur.name,
		location: loan.entrepreneur.location
	}
});

export const hideLightbox = () => ({
	type: "HIDE_LIGHTBOX"
});