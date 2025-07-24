import React from "react";
import "./styles.css";

const Amenities = () => {
  return (
    <div className="amenities-section">
      <div className="image-wrapper">
        <img
          src="https://www.meghatravels.in/images/photos/megha-bus1.jpg"
          alt="Bus Interior"
        />
      </div>
      <div className="text-wrapper">
        <h1>MEGHA TRANSPORT</h1>
        <h3>AMENITIES WE PROVIDE</h3>
        <p>
          Megha Transport aims to rapid growth in this industry by adopting more
          number of buses and providing more higher standards of quality and
          comfort!!!
        </p>
        <div className="amenities-list">
          <div className="amenity-item">
            <img
              src="https://img.icons8.com/?size=50&id=10800&format=png"
              alt="Reading Lamp"
            />
            <span>Reading Lamp</span>
          </div>
          <div className="amenity-item">
            <img
              src="https://img.icons8.com/?size=50&id=11441&format=png"
              alt="Entertainment"
            />
            <span>Entertainment</span>
          </div>
          <div className="amenity-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2737/2737832.png"
              alt="Blankets"
            />
            <span>Blankets</span>
          </div>
          <div className="amenity-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/13144/13144729.png"
              alt="Water Bottle"
            />
            <span>Water Bottle</span>
          </div>
          <div className="amenity-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/14422/14422336.png"
              alt="Charging Point"
            />
            <span>Charging Point</span>
          </div>
          <div className="amenity-item">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2859/2859724.png"
              alt="Free Wifi"
            />
            <span>Free Wifi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
