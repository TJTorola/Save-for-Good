export const showLightbox = ({ amount, name }) => ({
	type: "SHOW_LIGHTBOX",
	name, amount
});

export const hideLightbox = () => ({
	type: "HIDE_LIGHTBOX"
});