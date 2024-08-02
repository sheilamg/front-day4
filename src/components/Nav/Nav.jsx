import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css"
import { useAuth } from "../../utils/AuthProvider";

const Nav = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('AuthToken')))
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleSignOut = () => {

      console.log("User signed out");

      localStorage.removeItem("AuthToken");

      console.log("Tokens have been removed");
      logout();
      navigate("/login");

    };

    return (
      <>
        <nav>
          <a onClick={() => navigate("/")} className="a-nav">
            Home
          </a>
          { (items == null) && (
              <a onClick={() => navigate("/login")} className="a-nav">
                Log in
              </a>
              ) 
          }
          
          { (items !== null) && (
            <>
           <a onClick={() => navigate("/user-Profile")} className="a-nav">
           User
           </a> 
          <button onClick={handleSignOut}>
            Sign Out
          </button>
          </>
          
          )}
        </nav>
      </>
    );
  };

export default Nav;