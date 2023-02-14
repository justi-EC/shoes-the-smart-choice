import { ProductModel } from '../shares/Types';
import { createSlice } from '@reduxjs/toolkit';

interface BrandType {
	filteredBrand: ProductModel[];
	isRendered: boolean;
}

const initialState: BrandType = {
	filteredBrand: [],
	isRendered: false,
};

interface BrandDispatch {
	payload: {
		brandName: string;
		allProducts: ProductModel[];
	};
}

const brandSlice = createSlice({
	name: 'brand',
	initialState,
	reducers: {
		filteredBrand: (state, action: BrandDispatch) => {
			state.filteredBrand = action.payload.allProducts.filter(
				(item: ProductModel) => item.name?.includes(action.payload.brandName)
			);
			state.isRendered = true;
		},
		filteredAll: (state, action) => {
			state.filteredBrand = action.payload;
			state.isRendered = true;
		},
	},
});

export const brandActions = brandSlice.actions;

export default brandSlice;
