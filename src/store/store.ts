import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/loadingSlice';

export const store = configureStore({
	reducer: {
		laoding: loadingReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
