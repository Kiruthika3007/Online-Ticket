import React from "react";
import "./styles.css";

const DreamDestination = () => {
  return (
    <section className="dream-destination">
      <h2 className="destination-title">
        Find Your <span className="highlight">Dream Destination</span> Today
      </h2>
      <div className="destination-cards">
        <div className="destination-card">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrelZgYDxeepoR1h7E-kpVFRVinkOHqhf5HK1H6807UQ3JUehnPlM-zBQnHvDHKWzwx4ASYM8J6Y_UIjoL2T4Vu0mqB3xiddBagfPitQPIW9JGwypIAXngiud7kcWbSb2HlwSY=w832-h480-n-k-no"
            alt="Tenkasi to Bangalore"
          />
          <p>Tenkasi ⇄ Bangalore</p>
        </div>
        <div className="destination-card">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noLen3kVTQAU8l9qLRUny2zbtgmCSmmA1gXGhN6I3b97et4KJfQ2uQ-C3_6VYfe2m0lbwpejCpDLNaid0TUjOjjCHQq-3HBD983tlK1EOveGHIQvT5ecxAu8l-BVQIURp52OA8I5Q=w832-h480-n-k-no"
            alt="Tenkasi to Coimbatore"
          />
          <p>Tenkasi ⇄ Coimbatore</p>
        </div>
        <div className="destination-card">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqys3TjWFKIwHV3KmipnXUXXF3nxe1YcpDAnOiBj-MfZzpPX4nqizD-QjLmBRyZjC5O6W0hcymELbF9yRYZbNjve-g6OkK0U8mLfxmKRThLLK7uwV0akfAj0miBolNEVJZcEjZrYQ=w832-h480-n-k-no"
            alt="Tenkasi to Chennai"
          />
          <p>Tenkasi ⇄ Chennai</p>
        </div>
        <div className="destination-card">
          <img
            src="https://t3.ftcdn.net/jpg/06/96/09/96/240_F_696099629_5jL78pX6dkuta3pF5riZR2J698W6PFR9.jpg"
            alt="Tenkasi to Cochin"
          />
          <p>Tenkasi ⇄ Cochin</p>
        </div>
        <div className="destination-card">
          <img
            src="https://t4.ftcdn.net/jpg/03/09/35/79/240_F_309357942_RbjHTPtoXsvz9SAZPir5WJpol8k5GGFX.jpg"
            alt="Tenkasi to Pondicherry"
          />
          <p>Tenkasi ⇄ Pondicherry</p>
        </div>
      </div>
    </section>
  );
};

export default DreamDestination;
