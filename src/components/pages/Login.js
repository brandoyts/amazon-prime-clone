import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginWithFirebase } from "../../features/user/userSlice";
import "../../assets/css/Login.css";

function Login() {
	const dispatch = useDispatch();

	const [inputValues, setInputValues] = useState({
		fullname: "",
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		setInputValues({
			...inputValues,
			[key]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(loginWithFirebase(inputValues));
	};

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
			<form onSubmit={handleSubmit}>
				<h2>Sign-in</h2>
				<input
					value={inputValues.email}
					onChange={handleInputChange}
					type="email"
					name="email"
					placeholder="email..."
				/>
				<input
					value={inputValues.password}
					onChange={handleInputChange}
					type="password"
					name="password"
					placeholder="password..."
				/>
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
