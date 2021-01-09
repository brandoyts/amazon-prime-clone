import React, { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectMovie, fetchMovies } from "../../features/movie/movieSlice";
import { selectHover } from "../../features/hoverSlice";

import Header from "../Header";
import Nav from "../Nav";
import Carousel from "../Carousel";
import MovieSlider from "../MovieSlider";

function Home() {
	const hover = useSelector(selectHover);
	const movies = useSelector(selectMovie);
	const dispatch = useDispatch();
	const overlayRef = useRef();

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	if (overlayRef.current) {
		if (hover) {
			overlayRef.current.classList.add("hovered");
		} else {
			overlayRef.current.classList.remove("hovered");
		}
	}

	return (
		<div className="home">
			<Header />

			<div className="app__body">
				<div className="overlay" ref={overlayRef}></div>
				<Nav />
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

export default Home;
