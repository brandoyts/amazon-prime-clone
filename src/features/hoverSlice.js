import { createSlice } from "@reduxjs/toolkit";

export const hoverSlice = createSlice({
	name: "hover",
	initialState: {
		isHover: false,
	},

	reducers: {
		mouseEnter: (state) => {
			state.isHover = true;
		},

		mouseLeave: (state) => {
			state.isHover = false;
		},
	},
});

export const { mouseEnter, mouseLeave } = hoverSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectHover = (state) => state.hover.isHover;

export default hoverSlice.reducer;
