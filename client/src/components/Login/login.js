import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import './login.scss';
import { auth, googleProvider, facebookProvider } from '../misc/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const LogIn = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        onLogin(user);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        onLogin(user);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        onLogin(null);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (

    <div className="container" >

      <div className="login">

        <div className="login-container">
          <button className="facebook" onClick={handleFacebookSignIn}>
            <FaFacebookF size={30} color="white" /> Login with Facebook
          </button>
          {!auth.currentUser && (
            <button className="google" onClick={handleGoogleSignIn}>
              <FcGoogle size={30} color="white" /> Login with Google
            </button>
          )}
          {auth.currentUser && (
            <div className="user-info">
              <div className="user-name">Welcome, {auth.currentUser.email.split('@')[0]}</div>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default LogIn;