import Header from "./component/Header";
import "./css/Home.css";
import Offer from "./Offer"
import MostBookedServices from "./most_booked_services";
import WomenServices from"./women_service"
import Footer  from "./Footer";
import Main_Footer from "./Main_Footer"
import homepic from "./assets/Homepage.jpeg";
import Women from "./assets/Women's Saloon.jpeg"
import men from "./assets/Mens Saloon.jpeg"
import Cleaning from "./assets/Cleaning.jpeg"
import Electrician from "./assets/Electrician.jpeg"
import Ac from "./assets/Ac.jpeg"
import Water from "./assets/Native Water Purifier.jpeg"
import Locks from "./assets/Native smart Lock.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faUsers} from "@fortawesome/free-solid-svg-icons";
import VendorRegister from "./component/VendorRegister";
import AddService from "./component/AddService";
import AddressApi from "./component/AddressApi";
import BookingApi from "./component/BookingApi";
import ReviewApi from "./component/ReviewApi";
import PaymentApi from "./component/PaymentApi";
import SubscriptionPlanApi from "./component/SubscriptionPlanApi";
import VendorSubscriptionApi from "./component/VendorSubscriptionApi";
const Home = () => {
  return (
    <>
      <Header />

      <div className="homeContainer">
        <div className="leftSection">
          <h1>Home services at your doorstep</h1>
          <div className="serviceCard">

            <div className="serviceGrid">

              <div className="serviceItem">
                <img src={Women} alt="Women Saloon" />
                <p>Women's Salon</p>
              </div>

              <div className="serviceItem">
                <img src={men} alt="men" />
                <p>Men's Salon & 
                    Massage
                    </p>
              </div>

              <div className="serviceItem">
                <img src={Cleaning} alt="Cleaning" />
                <p>Cleaning</p>
              </div>

              <div className="serviceItem">
                <img src={Ac} alt="Ac" />
                <p>Ac & Appliance 
                    Repair
                </p>
              </div>

              <div className="serviceItem">
                <img src={Electrician} alt="Women Saloon" />
                <p>Electrician,Plumber
                  & Carpenter
                </p>
              </div>

            </div>

            {/* Smart Products */}
            <h3 className="subHeading">Native Smart Products</h3>

            <div className="serviceGrid smallGrid">

              <div className="serviceItem">
                <img src={Water} alt="" />
                <p>Native Water Purifier</p>
              </div>

              <div className="serviceItem">
                <img src={Locks} alt="" />
                <p>Native Smart Locks</p>
              </div>

            </div>

          </div>

          {/* STATS */}
          <div className="stats">

           <div className="Rating">
        <FontAwesomeIcon icon={faStar} className="starIcon"/>
        <div className="ratingContent">
            <div className="topRow">
            <h2>4.8</h2>
            </div>
        <p>Service Rating*</p>
        </div>
      </div>

        <div className="customers">
      <FontAwesomeIcon icon={faUsers} className="userIcon" />
      <div className="customerContent">
        <div className="topRow">
        <h2>12M+</h2>
        </div>

    <p>Customers Globally*</p>
   </div>

    </div>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="rightSection">
          <img src={homepic} alt="home" />
        </div>
      </div>

      <Offer/>
      <MostBookedServices/>
      <WomenServices/>
      <Footer/>
      <Main_Footer/>
      <VendorRegister/>
      <AddService/>
      <AddressApi/>
      <BookingApi/>
      <ReviewApi/>
      <PaymentApi/>
      <SubscriptionPlanApi/>
      <VendorSubscriptionApi/>
    </>
  );
};

export default Home;