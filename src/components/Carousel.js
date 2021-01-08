import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImg from "./CarouselImg";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import "../assets/css/Carousel.css";

SwiperCore.use([Navigation, Pagination]);

function Carousel() {
	return (
		<div className="carousel">
			<Swiper
				navigation
				pagination={{ clickable: true }}
				spaceBetween={0}
				slidesPerView={1}
			>
				<SwiperSlide>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_Borat_2_Turq_EVERGREEN/b3f5698e-be59-4df0-a4dd-ab92c2266f43._UR3000,600_SX1500_FMwebp_.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_3P_SVOD_Bombshell/7144eb5a-f8a3-4543-b3f8-de7ec9774491._UR3000,600_SX1500_FMwebp_.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_SoundofMetal/0b5180b3-119d-4d59-8b8a-3127df5e7b88._UR3000,600_SX1500_FMwebp_.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_ImYourWoman_Payoff/4f660651-81f4-44e9-bbbb-33551d2795c3._UR3000,600_SX1500_FMwebp_.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_3P_SVOD_ThinkLikeaDog/b1398626-b17a-480a-b05e-04a0b15dc406._UR3000,600_SX1500_FMwebp_.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_Herself/175b3e96-c389-4223-89f3-649f30a5eb78._UR3000,600_SX1500_FMwebp_.jpg" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Carousel;
