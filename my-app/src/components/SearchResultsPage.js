import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
import SeatBooking from "./SeatBooking";

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchData = location.state || {};
  const { fromCity, toCity, travelDate } = searchData;

  const [showSeatDetails, setShowSeatDetails] = useState(false);

  const goHome = () => {
    navigate("/");
  };

  const handleViewSeats = () => {
    setShowSeatDetails(!showSeatDetails);
  };

  return (
    <div>
      <header className="page-header">
        <p>
          {fromCity} ➝ {toCity} on {travelDate}
        </p>
      </header>

      <div className="back-button-container">
        <button className="back-button" onClick={goHome}>
          Back
        </button>

        {/* Add this button to toggle seat details */}
        <button onClick={handleViewSeats} className="view-seats-btn">
          {showSeatDetails ? "Hide Seats" : "View Seats"}
        </button>
      </div>

      <main className="search-results">
        <table className="results-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Bus Type</th>
              <th>Departure</th>
              <th>Duration</th>
              <th>Arrival</th>
              <th>Available Seats</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>TEN TO CBE</span>
              </td>
              <td>2+1, Sleeper/Seater, Non-AC (44 seats)</td>
              <td>
                <span className="time">08:30 PM</span>
              </td>
              <td>08:55 Hrs</td>
              <td>
                <span className="time">05:25 AM</span>
              </td>
              <td>
                <span className="seats">30 Seats available</span>
              </td>
              <td>
                <span className="fare">₹ 1099/-</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Conditionally render SeatBooking */}
        {showSeatDetails && <SeatBooking />}
      </main>
    </div>
  );
};

export default SearchResultsPage;
