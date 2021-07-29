import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div>Logo</div>
        <div className="page-links">
          <Link to="/courses" style={linkStyle}>
            Courses
          </Link>
          <Link to="/fees" style={linkStyle}>
            Fees
          </Link>
          <Link to="/faq" style={linkStyle}>
            FAQ
          </Link>
        </div>
        <div>
          <button className="apply-now-button">Apply Now</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
