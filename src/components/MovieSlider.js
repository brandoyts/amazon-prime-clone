import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImg from "./CarouselImg";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import "../assets/css/MovieSlider.css";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation]);

function MovieSlider({ movies, category }) {
	const renderMovies = () => {
		return movies.map((movie) => (
			<SwiperSlide key={movie.id}>
				<CarouselImg
					imgSrc={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
				/>
			</SwiperSlide>
		));
	};
	return (
		<div className="movieSlider">
			<h1 className="movieSlider__title">
				<span className="prime">prime </span>{" "}
				<span>{`${category} movies`}</span>
			</h1>
			<Swiper navigation spaceBetween={10} slidesPerView={8}>
				{renderMovies()}
			</Swiper>
		</div>
	);
}

export default MovieSlider;
