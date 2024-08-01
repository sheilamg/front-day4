import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthProvider';

export const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSignOut = () => {

    console.log("User signed out");

    //localStorage.removeItem("accessToken");
    //localStorage.removeItem("refreshToken");
    localStorage.removeItem("AuthToken");

    console.log("Tokens have been removed");
    logout();
    navigate("/login");

  };


  return (
    <>
    <div>This is the home page</div>
    <button onClick={handleSignOut}>
            Sign Out
    </button>
    </>
    
  )
}
