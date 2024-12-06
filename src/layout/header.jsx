import { Link, useNavigate } from "react-router-dom";

import "./header.css";
import Button from "../shared/button/button.jsx";

const Header = () => {
  const navigate = useNavigate();

  function navigatefunc(e) {
    if (e.target.value === "") {
      navigate("/services");
    } else {
      navigate(e.target.value);
    }
  }
  function navigateStudy(e){
    if (e.target.value === "") {
      navigate("/studies");
    } else {
      navigate(e.target.value);
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../../src/images/logo.svg" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <select
            onClick={(e) => navigate(e.target.value)}
            onChange={(e) => navigatefunc(e)}
            className="nav-select"
          >
            <option value="/services">Services</option>{" "}
            <option value="/service">Search Engine Optimization</option>
          </select>
        </li>
        <li>
          <select
            onClick={(e) => navigate(e.target.value)}
            onChange={(e) => navigateStudy(e)}
            className="nav-select nav-select_2">
            <option value="studies">Case Studies</option>
            <option value="/case-study">Case Study</option>
          </select>
        </li>
        <li>
          <select
            onClick={(e) => navigate(e.target.value)}
            onChange={(e) => navigatefunc(e)}
            className="nav-select "
          >
            <option value="/about-us">About us</option>
            <option value="/careers">Careers at Createx Agency</option>
          </select>
        </li>
        <li>
          <select
            onClick={(e) => navigate(e.target.value)}
            onChange={(e) => navigatefunc(e)}
            className="nav-select"
          >
            <option value="/blog">Blog</option>
            <option value="/single-post">
              How to Maximize Your ROI Through Scientific SEM?
            </option>
          </select>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
      <Button to="/contacts">Talk to a human</Button>
    </nav>
  );
};

export default Header;
