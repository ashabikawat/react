import React from "react";
import { Link, Outlet } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <Link
        to="websites"
        style={{
          paddingRight: "20px",
          color: "teal",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Websites
      </Link>

      <Link
        to="applications"
        style={{
          paddingRight: "20px",
          color: "teal",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Applications
      </Link>

      <Link
        to="designs"
        style={{
          paddingRight: "20px",
          color: "teal",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        3D designs
      </Link>

      <Outlet />
    </>
  );
}

export default Portfolio;
