import React from "react";
import "./style.css";

function Footer() {
    return (
      <footer className="footer">
        <span> ©Trendr { new Date().getFullYear() }</span>
      </footer>
    );
  }

export default Footer;