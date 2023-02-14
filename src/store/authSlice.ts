import { createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

interface AuthType {
  user: User | null;
}

const initialState: AuthType = {
  user: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
