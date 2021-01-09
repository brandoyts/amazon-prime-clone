import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Login.css";

function Login() {
	return (
		<div className="authPage">
			<div className="authPage__logo">
				<Link to="/">
					<img
						src="https://cdn.worldvectorlogo.com/logos/amazon-2.svg"
						alt=""
					/>
				</Link>
			</div>
			<form>
				<h2>Sign-in</h2>
				<input autoFocus type="email" placeholder="email..." />
				<input type="password" placeholder="password..." />
				<button type="submit">Sign in</button>
			</form>

			<div className="authPage__bottom">
				<p>New to Amazon?</p>
				<Link to="/register">Create you Amazon account</Link>
			</div>
		</div>
	);
}

export default Login;
