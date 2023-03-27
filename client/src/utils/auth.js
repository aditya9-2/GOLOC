import { auth } from "../components/misc/firebase";

// Firebase Authentication API wrapper functions
export const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
};

export const signInWithFacebook = () => {
    const provider = new auth.FacebookAuthProvider();
    return auth().signInWithPopup(provider);
};

export const signOut = () => {
    return auth().signOut();
};