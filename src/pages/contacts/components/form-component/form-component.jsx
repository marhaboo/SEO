import React, { useState } from "react";
import "./form-component.css"; 

const FormComponent = () => {
  const [budget, setBudget] = useState(25000);
  const [selectedService, setSelectedService] = useState("Research");

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Ready to get started?</h1>
        <div className="services">
          {["Social Media", "SEO", "Research", "Content & PR", "Payed Traffic"].map((service) => (
            <button
              key={service}
              className={`service ${selectedService === service ? "active" : ""}`}
              onClick={() => handleServiceChange(service)}
            >
              {service}
            </button>
          ))}
        </div>
        <form className="form">
          <div className="input-group">
            <input type="text" placeholder="Your first name" required />
            <input type="text" placeholder="Your last name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your working email" required />
            <input type="tel" placeholder="Your phone number" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Your company name" />
            <input type="text" placeholder="Your position" />
          </div>
          <div className="budget">
            <label>Approx. budget</label>
            <input
              type="range"
              min="5000"
              max="100000"
              step="1000"
              value={budget}
              onChange={handleBudgetChange}
            />
            <div className="budget-values">
              <span>$5K</span>
              <span>${budget}</span>
              <span>$100K</span>
            </div>
          </div>
          <textarea placeholder="Your message"></textarea>
          <div className="checkbox-group">
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement">
              I agree to receive communications from Creatxo SEO Agency
            </label>
          </div>
          <button type="submit" className="submit-button">
            Request a proposal
          </button>
        </form>
      </div>
      <div className="form-illustration">
       
        <img src="../../../../../src/images/contacts/Illustration (6).png" alt="Illustration" />
      </div>
    </div>
  );
};

export default FormComponent;
