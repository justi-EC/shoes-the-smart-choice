import { ProductModel } from '../shares/Types';
import { createSlice } from '@reduxjs/toolkit';

interface InitialType {
	cart: ProductModel[];
	total: number;
}

const initialState: InitialType = {
	cart: [],
	total: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const newItem = action.payload;
			const checkItem = state.cart.find((item) => item.id === newItem.id);

			if (!checkItem) {
				state.cart.push(action.payload);
				state.total += newItem.count;
			} else {
				checkItem.count++;
				state.total += newItem.count;
			}
		},

		removeItem(state, action) {
			state.cart.splice(
				state.cart.findIndex((item) => item.id === action.payload.id),
				1
			);
		},

		addCount(state, action) {
			state.cart[action.payload].count++;
		},

		removeCount(state, action) {
			if (state.cart[action.payload].count > 1) {
				state.cart[action.payload].count--;
			} else {
				state.cart[action.payload].count = 1;
			}
		},
		resetCount(state) {
			state.total = 0;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
