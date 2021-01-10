import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAAz6rjT1dMU62m1hXIKUgwv-qNS0a-mVM",
	authDomain: "prime-clone-dc443.firebaseapp.com",
	projectId: "prime-clone-dc443",
	storageBucket: "prime-clone-dc443.appspot.com",
	messagingSenderId: "187707580531",
	appId: "1:187707580531:web:c6f3cbbb0a726477768a06",
};

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();

export default firebaseAuth;
