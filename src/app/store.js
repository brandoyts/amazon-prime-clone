import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import hoverReducer from "../features/hoverSlice";

export default configureStore({
	reducer: {
		movie: movieReducer,
		hover: hoverReducer,
	},
});
