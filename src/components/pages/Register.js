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
				<h2>Register</h2>
				<input
					autoFocus
					type="text"
					name="fullname"
					placeholder="full name..."
				/>
				<input type="email" name="email" placeholder="email..." />
				<input
					type="password"
					name="password"
					placeholder="password..."
				/>
				<button type="submit">Create you Amazon account</button>
			</form>

			<div className="authPage__bottom">
				<small>
					Already have an account? <Link to="/login">Sign-In</Link>
				</small>
			</div>
		</div>
	);
}

export default Login;
