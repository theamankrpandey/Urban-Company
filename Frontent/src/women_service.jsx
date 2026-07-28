import "./css/women_services.css";
import waxing from "./assets/waxing.jpg";
import roll_on_waxing from "./assets/roll_on_waxing.jpg";
import mani_pedi_delight from "./assets/mani_pedi_delight .jpeg";
import facial from "./assets/facial.jpeg";

// TODO: agar image path/name alag hai to yahan sirf import line update kar dena,
// neeche womenSalonData me kuch change karne ki zarurat nahi hogi.

const womenSalonData = [
  {
    title: "Spatula waxing (Full arms, legs & underarms)",
    rating: 4.85,
    price: 599,
    image: waxing,
  },
  {
    title: "Roll-on waxing (Full arms, legs & underarms)",
    rating: 4.86,
    price: 749,
    image: roll_on_waxing,
  },
  {
    title: "Mani-pedi delight",
    rating: 4.82,
    price: 1168,
    image: mani_pedi_delight,
  },
  {
    title: "Aroma Magic instant glow facial",
    rating: 4.85,
    price: 799,
    image: facial,
  },
];

function WomenServices() {
  return (
    <section className="womenSalonSection" id="women-salon-section">
      <div className="womenSalonHeader">
        <div className="womenSalonHeading">
          <h2 className="womenSalonTitle">Salon for Women</h2>
          <p className="womenSalonSubtitle">Pamper yourself at home</p>
        </div>

        <button className="womenSalonSeeAll" id="women-salon-see-all">
          See all
        </button>
      </div>

      <div className="womenSalonGrid">
        {womenSalonData.map((service, i) => (
          <div
            className="womenSalonCard"
            id={`women-salon-card-${i}`}
            key={i}
          >
            <div className="womenSalonImage">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="womenSalonInfo">
              <p className="womenSalonCardTitle">{service.title}</p>

              <p className="womenSalonRating">
                <span className="womenSalonStar">★</span>{" "}
                {service.rating.toFixed(2)}
              </p>

              <p className="womenSalonPrice">₹{service.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WomenServices;
