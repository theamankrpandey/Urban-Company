import { useRef, useState, useEffect } from "react";
import "./css/most_booked_services.css";
import foamjetac1 from "./assets/foamjetac.png"
import acrepair from "./assets/ac_repair.webp"
import bathroom_cleaning from "./assets/bathroom_cleaning.jpeg"
import waxing from "./assets/waxing.jpg"
import intance_cleaning from "./assets/instance_cleaning_3bathroom.webp"
import roll_on_waxing from "./assets/roll_on_waxing.jpg"
import hair_cut_men from "./assets/hair_cut_men.jpeg"
import foam_jet_ac2 from "./assets/foam_jet_ac2.webp"
import mani_pedi_delight from "./assets/mani_pedi_delight .jpeg"
import facial from "./assets/facial.jpeg"
// TODO: apni actual images yahan import karke serviceData me daal dena
// import acFoamJet from "./assets/ac-foamjet.jpeg";
// import acRepair from "./assets/ac-repair.jpeg";

const serviceData = [
  {
    title: "Foam-jet AC service",
    rating: 4.75,
    reviews: "2.8M",
    price: 649,
    oldPrice: null,
    discount: null,
    image: foamjetac1, // acFoamJet
  },
  {
    title: "AC repair",
    rating: 4.73,
    reviews: "842K",
    price: 299,
    oldPrice: null,
    discount: null,
    image: acrepair // acRepair
  },
  {
    title: "Intense cleaning (2 bathrooms)",
    rating: 4.80,
    reviews: "6.3M",
    price: 835,
    oldPrice: 998,
    discount: "9% OFF",
    image: bathroom_cleaning,
  },
  {
    title: "Spatula waxing (Full arms, legs & underarms)",
    rating: 4.85,
    reviews: "184K",
    price: 599,
    oldPrice: null,
    discount: null,
    image: waxing,
  },
  {
    title: "Intense cleaning (3 bathrooms)",
    rating: 4.80,
    reviews: "6.3M",
    price: 1171,
    oldPrice: 1497,
    discount: "12% OFF",
    image: intance_cleaning,
  },
  {
    title: "Roll-on waxing (Full arms, legs & underarms)",
    rating: 4.86,
    reviews: "216K",
    price: 749,
    oldPrice: null,
    discount: null,
    image: roll_on_waxing,
  },
  {
    title: "Haircut for men",
    rating: 4.86,
    reviews: "478K",
    price: 259,
    oldPrice: null,
    discount: null,
    image: hair_cut_men,
  },
  {
    title: "Foam-jet service (2 ACs)",
    rating: 4.75,
    reviews: "2.8M",
    price: 1198,
    oldPrice: 1298,
    discount: null,
    image: foam_jet_ac2,
  },
  {
    title: "Mani-pedi delight",
    rating: 4.82,
    reviews: "320K",
    price: 1168,
    oldPrice: null,
    discount: null,
    image: mani_pedi_delight,
  },
  {
    title: "Aroma Magic instant glow facial",
    rating: 4.85,
    reviews: "74K",
    price: 799,
    oldPrice: null,
    discount: null,
    image: facial,
  },
];

function MostBookedServices() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;

    setCanScrollLeft(track.scrollLeft > 5);
    setCanScrollRight(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 1
    );
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const getCardStep = () => {
    const track = trackRef.current;
    if (!track) return 0;

    const firstCard = track.querySelector(".serviceCard1");
    if (!firstCard) return track.clientWidth;

    const style = window.getComputedStyle(track);
    const gap = parseInt(style.columnGap || style.gap || 0);

    return firstCard.offsetWidth + gap;
  };

  const scrollByOne = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const step = getCardStep();
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="mostBookedSection1">
      <h2>Most booked services</h2>

      <div className="mostBookedWrapper">
        {canScrollLeft && (
          <button
            className="scrollArrow left"
            onClick={() => scrollByOne(-1)}
            aria-label="Scroll left"
          >
            ←
          </button>
        )}

        <div
          className="serviceTrack"
          ref={trackRef}
          onScroll={updateArrows}
        >
          {serviceData.map((service, i) => (
            <div className="serviceCard1" key={i}>
              <div className="serviceImage1">
                {service.discount && (
                  <span className="discountBadge">{service.discount}</span>
                )}
                {service.image && (
                  <img src={service.image} alt={service.title} />
                )}
              </div>

              <div className="serviceInfo1">
                <p className="serviceTitle1">{service.title}</p>

                <p className="serviceRating1">
                  <span className="star">★</span> {service.rating.toFixed(2)}{" "}
                  ({service.reviews})
                </p>

                <p className="servicePrice1">
                  ₹{service.price}
                  {service.oldPrice && (
                    <span className="oldPrice">₹{service.oldPrice}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            className="scrollArrow right"
            onClick={() => scrollByOne(1)}
            aria-label="Scroll right"
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}

export default MostBookedServices;
