import React from "react";
import { Link } from "react-router-dom";
import "./button-2.css";

const Button2 = ({ border, color, to, children }) => {
  return (
    <Link to={to}>
      <button style={{color:color, border: `1px solid ${border}`}}  className="cta-button2">{children}</button>
    </Link>
  );
};

export default Button2;
