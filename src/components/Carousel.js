import React, { useState, useRef } from "react";
import "../assets/css/Carousel.css";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import CarouselImg from "./CarouselImg";

function Carousel() {
	const [page, setPage] = useState(0);
	const carouselRef = useRef();
	const bulletsRef = useRef();

	const renderArrow = (arrow) => {
		switch (arrow) {
			case "right":
				return (
					page <= 6 && (
						<span
							onClick={handleNext}
							className="carousel__next arrow"
						>
							<KeyboardArrowRightIcon fontSize="large" />
						</span>
					)
				);

			case "left":
				return (
					page >= 1 && (
						<span
							onClick={handlePrev}
							className="carousel__prev arrow"
						>
							<KeyboardArrowLeftIcon fontSize="large" />
						</span>
					)
				);

			default:
				return;
		}
	};

	const handleNext = (e) => {
		if (page <= 7) {
			setPage((prevState) => prevState + 1);

			carouselRef.current.children[page].removeAttribute("class");

			carouselRef.current.children[page + 1].setAttribute(
				"class",
				" active"
			);
		}
	};

	const handlePrev = (e) => {
		if (page !== 0) {
			setPage((prevState) => prevState - 1);
			carouselRef.current.children[page].removeAttribute("class");
			carouselRef.current.children[page - 1].setAttribute(
				"class",
				" active"
			);
		}
	};

	const handlePageChange = (e) => {
		setPage(e.target.dataset.page);
	};

	return (
		<div className="carousel">
			{renderArrow("left")}
			<ul className="carousel__imgContainer" ref={carouselRef}>
				<li className="active" data-page={0}>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg" />
				</li>
				<li data-page={1}>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_3P_SVOD_Blackbird/81d5f59b-4d4a-4e1a-bc45-d3c1ae23ee35._UR3000,600_SX1500_FMwebp_.jpg" />
				</li>
				<li data-page={2}>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_SmallAxe_Multititle_V1/b4c771f6-6a67-4e9c-b3c4-640021527b07._UR3000,600_SX1500_FMwebp_.jpg" />
				</li>
				<li data-page={3}>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_3P_SVOD_Vikings_S6B/9bb6fbfd-4253-4e34-ba17-d265a6870673._UR3000,600_SX1500_FMwebp_.jpg" />
				</li>
				<li data-page={4}>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/TheWids_FTV_FR_Control/accc0ea3-67cb-4b9e-baaa-1c70160d850e._UR3000,600_SX1500_FMwebp_.jpg" />
				</li>
				<li data-page={5}>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_3P_NBATV_launch_hero_SH/efad2ce7-bd4e-4bbc-b0e9-d609a7cf054e._UR3000,600_SX1500_FMwebp_.jpg" />
				</li>
				<li data-page={6}>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_TVOD_ShadowintheCloud_PVOD/c59feecc-1f60-4d83-8ef8-3db84dc01bdb._UR3000,600_SX1500_FMwebp_.jpg" />
				</li>
				<li data-page={7}>
					<CarouselImg imgSrc="https://m.media-amazon.com/images/S/sonata-images-prod/US_3P_AMCPlus_TheWatch_Superhero/c56a36df-16fb-4aea-885d-5f19617b4f4b._UR3000,600_SX1500_FMwebp_.jpg" />
				</li>
			</ul>

			<ul className="bullets" ref={bulletsRef}>
				<li onClick={handlePageChange} data-page={0}></li>
				<li onClick={handlePageChange} data-page={1}></li>
				<li onClick={handlePageChange} data-page={2}></li>
				<li onClick={handlePageChange} data-page={3}></li>
				<li onClick={handlePageChange} data-page={4}></li>
				<li onClick={handlePageChange} data-page={5}></li>
				<li onClick={handlePageChange} data-page={6}></li>
				<li onClick={handlePageChange} data-page={7}></li>
			</ul>
			{renderArrow("right")}
		</div>
	);
}

export default Carousel;
