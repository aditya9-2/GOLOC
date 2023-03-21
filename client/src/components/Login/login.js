import React, { useEffect } from 'react';
import { useState } from 'react';

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa';
import "./login.scss"
import { auth, provider } from "../misc/firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "../Home/Home";



const LogIn = () => {

  const [value, setValue] = useState('')
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })


  return (
    <div className='container'>
      <div className="login">

        <div className="login-container">

          <button className="facebook">
            <FaFacebookF size={30} color="white" /> Login with Facebook
          </button>

          {value ? <Home /> :
            <button className="google" onClick={handleClick}>
              <FcGoogle size={30} color="white" /> Login with Google
            </button>
          }

        </div>
      </div>
    </div>
  );
}

export default LogIn;