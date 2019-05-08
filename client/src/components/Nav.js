import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
   <div className="navbar">
        <ul className="navbar-list">
            <li className="navbar-link">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                 </Link>
            </li>
            <li className="navbar-link">
                <Link to="/search" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                   Search
                </Link>
            </li>
            <li className="navbar-link">
                <Link to="/saved" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Saved
                </Link>
            </li>
        </ul>
   </div>
  );
}

export default Nav;