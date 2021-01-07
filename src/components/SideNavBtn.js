import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "../assets/css/SideNavBtn.css";

function SideNavBtn() {
	return (
		<button className="sideNavBtn">
			<MenuIcon /> All
		</button>
	);
}

export default SideNavBtn;
