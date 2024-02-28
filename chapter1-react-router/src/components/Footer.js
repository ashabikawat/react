import React from "react";

function Footer() {
  return (
    <>
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          position: "absolute",
          bottom: "20px",
          width: "99vw",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        &copy;Asha Bikawat 2024
      </footer>
    </>
  );
}

export default Footer;
