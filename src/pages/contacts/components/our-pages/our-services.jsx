import React from "react";
import Button2 from "../../../../shared/button-2/button-2.jsx";
import "./our-services.css";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="flex content center">
        <div className="flex">
      
          <Link to="/">
      
            <i className="fas fa-home">Home</i>
          </Link>
          <span> <i className="fas fa-arrow-right"> ➡️ </i>Contacts</span>
        </div>

        <h2>Contacts</h2>
        <p>
          We offer more than services. Our agency provides solutions to your
          top-priority concerns, involving customer targeting, email performance
          and sales growth. If there is no existing solution readily available,
          we create one, specifically to suit your business.
        </p>
        <div className="flex bottom-our-services ">
          <Button2 border={"white"} bac children="Start now" />
          <div className="contact-info">
            <p>
              {" "}
              <i className="fas fa-phone"></i> Call us
            </p>
            <p className="phone-number">(405) 555 0128</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
