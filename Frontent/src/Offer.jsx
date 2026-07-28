import { useState } from "react";
import "./css/Offer.css";
import offer1 from "./assets/offer1.jpeg";
import offer2 from "./assets/offer2.jpeg";
import offer3 from "./assets/offer3.jpeg";
import offer4 from "./assets/offer4.jpeg";
import offer5 from "./assets/offer5.jpeg";
import offer6 from "./assets/offer6.jpeg";

const offerData = [
  {
    title: "Sofa deep Cleaning Starting at ₹569",
    subtitle: "Sofa cleaning service",
    image: offer1,
  },
  {
    title: "Shine your bathroom deserves",
    subtitle: "Bathroom cleaning",
    image: offer2,
  },
  {
    title: "Relax & rejuvenate at home",
    subtitle: "Spa for women",
    image: offer3,
  },
  {
    title: "AC service at best price",
    subtitle: "AC service & repair",
    image: offer4,
  },
  {
    title: "Kitchen cleaning offers",
    subtitle: "Kitchen deep cleaning",
    image: offer5,
  },
  {
    title: "Home painting discounts",
    subtitle: "Professional painters",
    image: offer6,
  },
];

function Offer() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index + 3 < offerData.length) setIndex(index + 3);
  };

  const prev = () => {
    if (index - 3 >= 0) setIndex(index - 3);
  };

  return (
    <section className="offersSection">
      <h2>Offers & discounts</h2>

      <div className="offerWrapper">
        {index > 0 && (
          <button className="arrow left" onClick={prev}>
            ❮
          </button>
        )}

        <div className="offerCards">
          {offerData.slice(index, index + 3).map((item, i) => (
            <div
              key={i}
              className="offerCard"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay">
                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>

                <button className="bookBtn">Book now</button>
              </div>
            </div>
          ))}
        </div>

        {index + 3 < offerData.length && (
          <button className="arrow right" onClick={next}>
            ❯
          </button>
        )}
      </div>
    </section>
  );
}
export default Offer;