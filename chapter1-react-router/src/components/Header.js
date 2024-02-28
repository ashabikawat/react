import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header
        style={{
          backgroundColor: "black",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <nav>
          <ul>
            <NavLink
              to="/"
              style={{
                paddingRight: "20px",
                color: "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="about"
              style={{
                paddingRight: "20px",
                color: "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              About us
            </NavLink>

            <NavLink
              to="portfolio"
              style={{
                paddingRight: "20px",
                color: "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Portfolio
            </NavLink>

            <NavLink
              to="services"
              style={{
                paddingRight: "20px",
                color: "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Services
            </NavLink>

            <NavLink
              to="contact"
              style={{
                paddingRight: "20px",
                color: "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Contact
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
