import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieSlice = createSlice({
	name: "movie",
	initialState: {
		popular: [],
		topRated: [],
		upcoming: [],
		nowPlaying: [],
	},
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},

		initMovies: (state, { payload }) => {
			state.popular = payload.popular;
			state.topRated = payload.topRated;
			state.upcoming = payload.upcoming;
			state.nowPlaying = payload.nowPlaying;
		},
	},
});

export const {
	increment,
	decrement,
	incrementByAmount,
	initMovies,
} = movieSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const fetchMovies = () => async (dispatch) => {
	const popularMovies = await axios.get(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
	);

	const topRatedMovies = await axios.get(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
	);

	const upcomingMovies = await axios.get(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
	);

	const nowPlayingMovies = await axios.get(
		`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=2`
	);

	const popular = popularMovies.data.results;
	const topRated = topRatedMovies.data.results;
	const upcoming = upcomingMovies.data.results;
	const nowPlaying = nowPlayingMovies.data.results;

	const initialMovies = {
		popular,
		topRated,
		upcoming,
		nowPlaying,
	};

	dispatch(initMovies(initialMovies));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMovie = (state) => state.movie;

export default movieSlice.reducer;
