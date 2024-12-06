import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <img src="../../../src/assets/images/logo.svg" alt="" />
          <p>
            Createx SEO Agency is a full-service digital marketing agency. We
            help businesses make more money through a wealth of performance data
            and market research. We create science-based SEO strategies to
            empower our clients.
          </p>
          <div className="footer-socials">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Case Studies</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>SERVICES</h4>
          <ul>
            <li>
              <a href="#">Social Media</a>
            </li>
            <li>
              <a href="#">SEO</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">Content & PR</a>
            </li>
            <li>
              <a href="#">Payed Traffic</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>📞 (405) 555-0128</p>
          <p>✉️ hello@createx.com</p>
        </div>
        <div className="footer-column newsletter">
          <h4>SIGN UP TO OUR NEWSLETTER</h4>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">→</button>
          </form>
          <p>
            *Subscribe to our newsletter to receive communication and early
            updates from Createx SEO Agency.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-partners">
          <div className="footer-images">
            <img
              src="../../../src/images/footer/award.svg"
              alt="Clutch"
            />
            <img
              src="../../../src/images/footer/award-1.svg"
              alt="Clutch"
            />
            <img
              src="../../../src/images/footer/award-2.svg"
              alt="Clutch"
            />
            <img
              src="../../../src/images/footer/award.svg"
              alt="Clutch"
            />
          </div>

          <a href="#top" className="go-to-top">
            Go to Top ↑
          </a>
        </div>
        <p>© All rights reserved. Made with ❤️ by Createx Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
