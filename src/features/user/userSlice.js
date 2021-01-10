import { createSlice } from "@reduxjs/toolkit";
import firebaseAuth from "../../firebase";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		isAuth: false,
		displayName: null,
	},
	reducers: {
		login: (state, { payload }) => {
			state.isAuth = true;
			state.displayName = payload.displayName;
		},

		register: (state, { payload }) => {
			state.isAuth = true;
			state.displayName = payload.displayName;
		},

		logout: (state) => {
			state.isAuth = false;
			state.displayName = null;
		},
	},
});

export const { login, register, logout } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const registerWithFirebase = (values) => (dispatch) => {
	firebaseAuth
		.createUserWithEmailAndPassword(values.email, values.password)
		.then((authUser) => {
			authUser.user
				.updateProfile({
					displayName: values.fullname,
				})
				.then(() => {
					dispatch(
						register({
							displayName: authUser.user.displayName,
						})
					);
				});
		});
};

export const loginWithFirebase = (values) => (dispatch) => {
	firebaseAuth
		.signInWithEmailAndPassword(values.email, values.password)
		.then((authUser) => {
			console.log(authUser);
			dispatch(
				login({
					displayName: authUser.user.displayName,
				})
			);
		});
};

export const logoutWithFirebase = () => (dispatch) => {
	firebaseAuth
		.signOut()
		.then(() => dispatch(logout()))
		.catch((error) => alert(error.message));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.user;

export default userSlice.reducer;
