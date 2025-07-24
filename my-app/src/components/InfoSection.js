// InfoSection.js
import React from "react";
import "./styles.css";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Feedback</li>
          <li>Contact</li>
          <li>Boarding Places</li>
        </ul>
      </div>
      <div className="manage-ticket">
        <h3>Manage Ticket</h3>
        <ul>
          <li>Download Ticket</li>
          <li>Track My Bus</li>
          <li>Cancel Ticket</li>
          <li>Change Boarding Point</li>
          <li>Change Travel Date</li>
        </ul>
      </div>
      <div className="head-office">
        <h3>Head Office</h3>
        <address>No 34/5, Pillayar Kovil Street, Idaikal, Tenkasi.</address>
        <p>Email: krithikakrishram7@gmail.com</p>
        <p>Phone: 9778530327</p>
      </div>
    </div>
  );
};

export default InfoSection;
