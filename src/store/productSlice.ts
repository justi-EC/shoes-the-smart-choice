import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductModel } from '../shares/Type';

export type ProductState = {
	arrProduct: ProductModel[];
	isLoading: boolean;
};

const initialState: ProductState = {
	arrProduct: [
		{
			id: 1,
			name: 'Adidas Prophere',
			alias: 'adidas-prophere',
			price: 350,
			description:
				'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
			size: '[36,37,38,39,40,41,42]',
			shortDescription:
				'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
			quantity: 995,
			deleted: false,
			categories:
				'[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
			relatedProducts: '[2,3,5]',
			feature: true,
			image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
			count: 0,
		},
	],
	isLoading: false,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getAllProductApi.pending,
			(state: ProductState, action) => {}
		);

		builder.addCase(
			getAllProductApi.fulfilled,
			(state: ProductState, action: PayloadAction<ProductModel[]>) => {
				state.arrProduct = action.payload;
			}
		);
		builder.addCase(
			getAllProductApi.rejected,
			(state: ProductState, action) => {}
		);
	},
});

export const getAllProductApi = createAsyncThunk(
	'productSlice/getAllProductApi',
	async () => {
		const API_URL = 'https://shop.cyberlearn.vn/api/Product';
		const res = await axios.get(API_URL);
		return res.data.content;
	}
);

export const productActions = productSlice.actions;

export default productSlice;
