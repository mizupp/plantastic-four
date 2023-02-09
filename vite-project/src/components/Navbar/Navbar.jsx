import React from "react";
import "./styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { logo } from "../../assets/img";

const Navbar = ({ displayNav }) => {
  const handleLogout = () => {
    sessionStorage.clear();
  };

  return (
    <div>
      {displayNav ? (
        <>
          {/* <div className="navlogo"><img className='img-logo' src={logo} alt="Logo" /></div> */}
          <nav>
            <ul>
              <li>
                <img className="img-logo" src={logo} alt="Logo" />
              </li>
              <li>
                <NavLink className="home-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/shelf">
                  Shelf
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/search">
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/prediction">
                  Health
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/settings">
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink className="active" onClick={handleLogout} to="/">
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
