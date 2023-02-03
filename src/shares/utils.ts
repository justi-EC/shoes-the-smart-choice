export const getKrPrice = (price: number) => {
	const krPrice = (price * 1000)
		.toString()
		.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	return krPrice;
};
