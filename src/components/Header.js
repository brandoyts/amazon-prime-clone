import React from "react";
import "../assets/css/Header.css";
import SearchInput from "./SearchInput";
import SideNavBtn from "./SideNavBtn";
import HeaderOption from "./HeaderOption";
import { useSelector, useDispatch } from "react-redux";
import { mouseEnter, mouseLeave } from "../features/hoverSlice";

function Header() {
	const dispatch = useDispatch();

	const handleMouseEnter = () => {
		dispatch(mouseEnter());
	};

	const handleMouseLeave = () => {
		dispatch(mouseLeave());
	};

	return (
		<div className="header">
			<div className="header__top">
				<div className="header__top__left">
					<img
						src="https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Amazon.png"
						alt=""
					/>
				</div>

				<div className="header__top__middle">
					<SearchInput />
				</div>

				<div className="header__top__right">
					<HeaderOption
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<h2>language</h2>

						<div className="dropdown language">
							<ul>
								<li>EN</li>
								<li>PH</li>
								<li>ES</li>
								<li>KO</li>
								<li>PT</li>
							</ul>
						</div>
					</HeaderOption>

					<HeaderOption
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<p>Hello, Sign in</p>
						<h4>Account & Lists</h4>

						<div className="dropdown account">
							<div className="account__top">
								<button>Sign in</button>
								<small>New customer? Start here.</small>
							</div>
							<div className="account__bottom">
								<div className="account__bottom__left">
									<h3>Your Lists</h3>
									<ul>
										<li>test</li>
										<li>test</li>
										<li>test</li>
										<li>test</li>
										<li>test</li>
										<li>test</li>
									</ul>
								</div>
								<div className="account__bottom__right">
									<h3>Your Account</h3>
									<ul>
										<li>Account</li>
										<li>Orders</li>
										<li>Recommendations</li>
										<li>Browsing History</li>
										<li>Watchlist</li>
										<li>Music Library</li>
									</ul>
								</div>
							</div>
						</div>
					</HeaderOption>

					<HeaderOption>
						<p>Returns</p>
						<h4>& Orders</h4>
					</HeaderOption>

					<HeaderOption>
						<h4>Cart</h4>
					</HeaderOption>
				</div>
			</div>

			<div className="header__middle">
				<ul className="header__middle__left">
					<li className="header__middle__link">
						<SideNavBtn />
					</li>
					<li className="header__middle__link">Today's Deals</li>
					<li className="header__middle__link">Customer Service</li>
					<li className="header__middle__link">Gift Cards</li>
					<li className="header__middle__link">Sell</li>
					<li className="header__middle__link">Registry</li>
				</ul>

				<h4 className="header__middle__link">
					Amazon's response to COVID-19
				</h4>
			</div>
		</div>
	);
}

export default Header;
