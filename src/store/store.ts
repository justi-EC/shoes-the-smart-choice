import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import loginSlice from './loginSlice';
import productSlice from './productSlice';

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		login: loginSlice.reducer,
		product: productSlice.reducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
