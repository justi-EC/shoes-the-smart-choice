import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductModel } from '../shares/Types';

export type ProductState = {
	arrProduct: ProductModel[];
	isPending: boolean;
};

const initialState: ProductState = {
	arrProduct: [
		{
			id: 1,
			name: '',
			alias: '',
			price: 0,
			description: '',
			size: '',
			shortDescription: '',
			quantity: 0,
			deleted: false,
			categories: '',
			relatedProducts: '',
			feature: true,
			image: '',
			count: 0,
		},
	],
	isPending: false,
};
const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductApi.pending, (state: ProductState) => {
			state.isPending = true;
		});

		builder.addCase(
			getAllProductApi.fulfilled,
			(state: ProductState, action: PayloadAction<ProductModel[]>) => {
				state.isPending = false;
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
