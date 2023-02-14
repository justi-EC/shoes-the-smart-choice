import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import productSlice from './productSlice';
import brandSlice from './brandSlice';
import sortSlice from './sortSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    product: productSlice.reducer,
    brand: brandSlice.reducer,
    sort: sortSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
