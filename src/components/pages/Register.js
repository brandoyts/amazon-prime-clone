import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerWithFirebase } from "../../features/user/userSlice";
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
		dispatch(registerWithFirebase(inputValues));
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
				<h2>Register</h2>
				<input
					value={inputValues.fullname}
					onChange={handleInputChange}
					autoFocus
					type="text"
					name="fullname"
					placeholder="full name..."
				/>
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
