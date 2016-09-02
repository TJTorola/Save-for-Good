export const showLightbox = loan => ({
	type: "SHOW_LIGHTBOX",
	name: loan.entrepreneur.name,
	amount: loan.amount
});

export const hideLightbox = () => ({
	type: "HIDE_LIGHTBOX"
});