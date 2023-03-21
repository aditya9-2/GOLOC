import React from 'react';
// import { initializeApp } from "firebase/app";
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import "./login.scss";
// import { auth } from '../../misc/firebase';



const login = () => {

  // const signInWithProvider = async provider => {

  //   const result = await auth.(provider);
  //   console.log('result', result);

  // };

  // const onFacebookSignIn = () => {
  //   signInWithProvider(new initializeApp.auth.FacebookAuthProvider())
  // };

  // const onGoogleSignIn = () => {
  //   signInWithProvider(new initializeApp.auth.GoogleAuthProvider())
  // };

  return (
    <div className='container'>
      <div className="login">

        <div className="login-container">
          <button className="facebook" onClick={''}>
            <FaFacebookF size={30} color="white" /> Login with Facebook
          </button>
          <button className="google" onClick={''}>
            <FcGoogle size={30} color="white" /> Login with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default login
