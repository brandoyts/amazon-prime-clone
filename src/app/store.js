import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import hoverReducer from "../features/hoverSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
	reducer: {
		movie: movieReducer,
		hover: hoverReducer,
		user: userReducer,
	},
});
