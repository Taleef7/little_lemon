import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white">
        <div className="row">
          <div className="col-full col-half col-3rd mb-6 foot-center bg-dark">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-6 foot-center bg-dark">
            <h4>SITEMAP</h4>
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/about">
              About
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/reserve">
              Reserve
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-6 foot-center bg-dark">
            <h4>CONTACT US</h4>
            <address>
              Alif Bay Pay
              <br />
              Everyehere, EW 12345
            </address>
            <a className="footer-block" href="tel:+9290078601">
              090078601
            </a>
            <br />
            <a className="footer-block" href="mailto: CSR@littlelemon.com">
              contact@littlelemon.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
