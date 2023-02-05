import { createSlice } from '@reduxjs/toolkit';
import { AuthType, AuthTypeDispatch } from '../shares/Types';

const initialState: AuthType[] = [];

const loginSlice = createSlice({
	name: 'login',
	initialState: initialState,
	reducers: {
		login(state: AuthType[], action: AuthTypeDispatch) {
			state.push(action.payload);
		},
	},
});

export const loginActions = loginSlice.actions;
export default loginSlice;
