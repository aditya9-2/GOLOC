import firebase from "firebase/app";
import "firebase/auth";
const config = {
    apiKey: "AIzaSyAtCYy73GVZu2UzKgc-Fq5Rq3fFe3ATPIg",
    authDomain: "g0-local.firebaseapp.com",
    projectId: "g0-local",
    storageBucket: "g0-local.appspot.com",
    messagingSenderId: "983913284884",
    appId: "1:983913284884:web:56a237285fddcd1609ae01"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();