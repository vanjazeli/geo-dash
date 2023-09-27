import { createSlice } from '@reduxjs/toolkit';

type LoadingState = {
	value: boolean;
};

const initialState: LoadingState = {
	value: true,
};

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		setLoadingOn: (state) => {
			state.value = true;
		},
		setLoadingOff: (state) => {
			state.value = false;
		},
	},
});

export const { setLoadingOn, setLoadingOff } = loadingSlice.actions;
export default loadingSlice.reducer;
