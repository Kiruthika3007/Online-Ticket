import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <div className="contact-card">
        <h3>Head Office</h3>
        <a
          href="https://www.google.com/maps/place/Shop+No+158F,+First+Floor,+SM+Complex,+Tenkasi"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-link"
        >
          📍 Direction
        </a>
        <p>Shop No 158F, First Floor, SM Complex, Tenkasi</p>
        <a href="tel:9344337070" className="phone-link">
          9778530327
        </a>
      </div>
    </div>
  );
};

export default Contact;
