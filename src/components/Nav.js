import React from "react";
import "../assets/css/Nav.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Nav() {
	return (
		<nav className="nav">
			<div className="nav__left">
				<h2>prime video</h2>
				<ul>
					<li className="active">Home</li>
					<li>Store</li>
					<li>Channels</li>
					<li>Categories</li>
					<li>My Stuff</li>
					<li>Deals</li>
				</ul>
			</div>

			<div className="nav__right">
				<ul className="nav__options">
					<li>Settings</li>
					<li>Getting Started</li>
					<li>Help</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
