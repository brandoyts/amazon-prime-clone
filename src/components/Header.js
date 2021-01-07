import React from "react";
import "../assets/css/Header.css";
import SearchInput from "./SearchInput";
import LanguageInput from "./LanguageInput";
import SideNavBtn from "./SideNavBtn";

function Header() {
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
					<LanguageInput />
					<LanguageInput />
					<LanguageInput />
					<LanguageInput />
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
