import { createSlice } from '@reduxjs/toolkit';
const sortSlice = createSlice({
	name: 'sort',
	initialState: {
		sortType: 'default',
	},
	reducers: {
		setSortType: (state, action) => {
			state.sortType = action.payload;
		},
	},
});

export const sortActions = sortSlice.actions;
export default sortSlice;
