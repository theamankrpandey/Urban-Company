import "./css/Main_Footer.css";
import logo from "./assets/Urban Comapany logo .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXTwitter,faFacebookF,faInstagram,faLinkedinIn,faApple,faGooglePlay,} from "@fortawesome/free-brands-svg-icons";

function Main_Footer() {
  return (
    <footer id="footer" className="Footer">
      <div className="footerContainer">

        <div className="footerTop">
          <img src={logo} alt="Urban Company logo" className="logo" />
        </div>

        <div className="footerLinks">

          <div className="footerColumn companyColumn">
            <h4 className="footerHeading">Company</h4>
            <ul className="footerList">
              <li className="footerItem">
                <a href="/about-us" className="footerLink">About us</a>
              </li>
              <li className="footerItem">
                <a href="/investor-relations" className="footerLink">Investor Relations</a>
              </li>
              <li className="footerItem">
                <a href="/terms-and-conditions" className="footerLink">Terms & conditions</a>
              </li>
              <li className="footerItem">
                <a href="/privacy-policy" className="footerLink">Privacy policy</a>
              </li>
              <li className="footerItem">
                <a href="/anti-discrimination-policy" className="footerLink">Anti-discrimination policy</a>
              </li>
              <li className="footerItem">
                <a href="/careers" className="footerLink">Careers</a>
              </li>
            </ul>
          </div>

          <div className="footerColumn customersColumn">
            <h4 className="footerHeading">For customers</h4>
            <ul className="footerList">
              <li className="footerItem">
                <a href="/reviews" className="footerLink">UC reviews</a>
              </li>
              <li className="footerItem">
                <a href="/categories-near-you" className="footerLink">Categories near you</a>
              </li>
              <li className="footerItem">
                <a href="/contact-us" className="footerLink">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="footerColumn professionalsColumn">
            <h4 className="footerHeading">For professionals</h4>
            <ul className="footerList">
              <li className="footerItem">
                <a href="/register-professional" className="footerLink">Register as a professional</a>
              </li>
            </ul>
          </div>

          <div className="footerColumn socialColumn">
            <h4 className="footerHeading">Social links</h4>

            <div className="socialIcons">
              <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X" className="socialIconLink">
                <FontAwesomeIcon icon={faXTwitter} className="faXTwitter" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="socialIconLink">
                <FontAwesomeIcon icon={faFacebookF} className="faFacebookF" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="socialIconLink">
                <FontAwesomeIcon icon={faInstagram} className="faInstagram" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="socialIconLink">
                <FontAwesomeIcon icon={faLinkedinIn} className="faLinkedinIn" />
              </a>
            </div>

            <div className="appBadges">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="appBadge appStoreBadge"
              >
                <FontAwesomeIcon icon={faApple} className="faApple" />
                <span className="appBadgeText">
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </span>
              </a>

              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noreferrer"
                className="appBadge googlePlayBadge"
              >
                <FontAwesomeIcon icon={faGooglePlay} className="faGooglePlay" />
                <span className="appBadgeText">
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>

          </div>

        </div>

        <hr className="footerDivider" />

        <div className="footerBottom">
          <p className="footerNote">* As on December 31, 2024</p>
          <p className="footerCopyright">
            © Copyright {new Date().getFullYear()} Urban Company Limited (formerly known as UrbanClap Technologies India Limited and UrbanClap Technologies India India Limited) All rights reserved. | CIN: L74140DL2014PLC274413
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Main_Footer;