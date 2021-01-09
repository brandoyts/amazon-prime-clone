import React from "react";
import "../assets/css/HeaderOption.css";

function HeaderOption({ children, onMouseEnter, onMouseLeave }) {
	return (
		<div
			className="headerOption"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</div>
	);
}

export default HeaderOption;
