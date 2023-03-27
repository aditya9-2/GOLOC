import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import './login.scss';
import { auth, googleProvider, facebookProvider } from '../misc/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setEmail(user.email);
        localStorage.setItem('email', user.email);
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
        setUser(user);
        setEmail(user.email);
        localStorage.setItem('email', user.email);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setEmail('');
        setUser(null);
        localStorage.removeItem('email');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container" style={{ background: 'linear-gradient(to right, #fff8dc, #980f0f)' }}>
      <div className="login">
        <div className="login-container">
          <button className="facebook" onClick={handleFacebookSignIn}>
            <FaFacebookF size={30} color="white" /> Login with Facebook
          </button>
          {!email && (
            <button className="google" onClick={handleGoogleSignIn}>
              <FcGoogle size={30} color="white" /> Login with Google
            </button>
          )}
          {email && (
            <div className="user-info">
              <div className="user-name">Welcome, {email.split('@')[0]}</div>
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