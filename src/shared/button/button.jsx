import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ to, children }) => {
  return (
    <Link to={to}>
      <button className="cta-button">{children}</button>
    </Link>
  );
};

export default Button;
