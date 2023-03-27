import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAtCYy73GVZu2UzKgc-Fq5Rq3fFe3ATPIg",
    authDomain: "g0-local.firebaseapp.com",
    databaseURL: "https://g0-local-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "g0-local",
    storageBucket: "g0-local.appspot.com",
    messagingSenderId: "983913284884",
    appId: "1:983913284884:web:56a237285fddcd1609ae01"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// const onFacebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };