export const showLightbox = loan => ({
	type: "SHOW_LIGHTBOX",
	name: loan.entrepreneur.name,
	loan: {
		id: loan.id,
		amount: loan.amount,
		name: loan.entrepreneur.name
	}
});

export const hideLightbox = () => ({
	type: "HIDE_LIGHTBOX"
});