import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
	value: number;
};

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {},
});

export default counterSlice.reducer;
