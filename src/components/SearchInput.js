import React from "react";
import "../assets/css/SearchInput.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchInput() {
	return (
		<form className="searchInput">
			<select
				className="searchInput__department"
				id="department"
				name="department"
			>
				<option value="all">All Departments</option>
				<option value="arts_and_crafts">Arts & Crafts</option>
				<option value="baby">Baby</option>
				<option value="automotive">Automotive</option>
			</select>

			<input type="text" name="search-text" />
			<button>
				<SearchIcon />
			</button>
		</form>
	);
}

export default SearchInput;
