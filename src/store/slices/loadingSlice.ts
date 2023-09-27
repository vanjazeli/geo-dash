import { createSlice } from '@reduxjs/toolkit';

type LoadingState = {
	value: boolean;
};

const initialState: LoadingState = {
	value: false,
};

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {},
});

export default loadingSlice.reducer;
