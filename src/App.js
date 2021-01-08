import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMovie, fetchMovies } from "./features/movie/movieSlice";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import MovieSlider from "./components/MovieSlider";

function App() {
	const movies = useSelector(selectMovie);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
		console.log(movies.popular);
	}, []);

	return (
		<div className="app">
			<Header />
			<Nav />

			<div className="app__body">
				<section id="slider">
					<Carousel />
				</section>

				<section id="popular">
					<MovieSlider movies={movies.popular} category="Popular" />
				</section>

				<section id="topRated">
					<MovieSlider
						movies={movies.topRated}
						category="Top rated"
					/>
				</section>

				<section id="upcoming">
					<MovieSlider movies={movies.upcoming} category="Upcoming" />
				</section>

				<section id="nowPlaying">
					<MovieSlider
						movies={movies.nowPlaying}
						category="Now playing"
					/>
				</section>
			</div>
		</div>
	);
}

export default App;
