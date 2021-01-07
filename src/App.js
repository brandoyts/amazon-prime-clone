import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";

function App() {
	return (
		<div className="app">
			<Header />
			<Nav />

			<div className="app__body">
				<Carousel />
			</div>
		</div>
	);
}

export default App;
