import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/user/userSlice";
import firebaseAuth from "./firebase";
import "./App.css";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		firebaseAuth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						displayName: authUser.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route
					path="/login"
					render={() =>
						user.isAuth ? <Redirect to="/" /> : <Login />
					}
				/>
				<Route
					path="/register"
					render={() =>
						user.isAuth ? <Redirect to="/" /> : <Register />
					}
				/>
			</Switch>
		</Router>
	);
}

export default App;
