import { ProductModel, ProductModelDispatch } from './../shares/Type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProductModel[] = [];

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addItem(state: ProductModel[], action: ProductModelDispatch) {
			const newItem = action.payload;
			const checkItem = state.find((item) => item.id === newItem.id);

			if (!checkItem) {
				state.push(action.payload);
			} else {
				checkItem.count++;
			}
		},

		removeItem(state, action) {
			state.splice(
				state.findIndex((item) => item.id === action.payload.id),
				1
			);
		},

		addCount(state, action) {
			state[action.payload].count++;
		},

		removeCount(state, action) {
			if (state[action.payload].count > 1) {
				state[action.payload].count--;
			} else {
				state[action.payload].count = 1;
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
