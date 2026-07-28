import Navbar from 'react-bootstrap/Navbar';
import "../css/Header.css";
import logo from "../assets/Urban Comapany logo .png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass,faCartShopping,faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Navbar expand="lg" className="Navbar">

      <div className="navLeft">
        <img src={logo} alt="logo" className="logo" />
        <a href="https://www.google.com/" className="Native">
          Native
        </a>
      </div>

      <div className="NavbarSearchBox">

        <div className="locationBox">
          <FontAwesomeIcon icon={faLocationDot} className="locationIcon" />
          <input type="text" placeholder="Your Location" />
        </div>

        <div className="searchBox">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          <input type="text" placeholder="Search for 'Kitchen cleaning'" />
        </div>

      </div>

      <div className="navRight">
        <FontAwesomeIcon icon={faCartShopping}  className='faCartShopping'/>
        <FontAwesomeIcon icon={faCircleUser} className='faCircleUser'/>
      </div>
      
    </Navbar>
    
  );
}

export default Header;