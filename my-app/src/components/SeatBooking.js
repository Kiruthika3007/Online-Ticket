import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const SeatBooking = () => {
  const navigate = useNavigate();

  const seatData = [
    { id: "L1", type: "available", deck: "lower" },
    { id: "L4", type: "available", deck: "lower" },
    { id: "L7", type: "available", deck: "lower" },
    { id: "L10", type: "available", deck: "lower" },
    { id: "L13", type: "available", deck: "lower" },
    { id: "L2", type: "available", deck: "lower" },
    { id: "L5", type: "available", deck: "lower" },
    { id: "L8", type: "available", deck: "lower" },
    { id: "L11", type: "available", deck: "lower" },
    { id: "LS10", type: "available", deck: "lower" },
    { id: "LS3", type: "available", deck: "lower" },
    { id: "LS6", type: "available", deck: "lower" },
    { id: "LS9", type: "available", deck: "lower" },
    { id: "LS12", type: "available", deck: "lower" },
    { id: "LS15", type: "available", deck: "lower" },
    { id: "US1", type: "available", deck: "upper" },
    { id: "U2", type: "available", deck: "upper" },
    { id: "U3", type: "available", deck: "upper" },
    { id: "US4", type: "available", deck: "upper" },
    { id: "U5", type: "available", deck: "upper" },
    { id: "U6", type: "available", deck: "upper" },
    { id: "US7", type: "available", deck: "upper" },
    { id: "U8", type: "available", deck: "upper" },
    { id: "U9", type: "available", deck: "upper" },
    { id: "US10", type: "available", deck: "upper" },
    { id: "U11", type: "available", deck: "upper" },
    { id: "U12", type: "available", deck: "upper" },
    { id: "US13", type: "available", deck: "upper" },
    { id: "U14", type: "available", deck: "upper" },
    { id: "U15", type: "available", deck: "upper" },
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [boardingPoint, setBoardingPoint] = useState("");
  const [dropoffPoint, setDropoffPoint] = useState("");
  const [seatsTouched, setSeatsTouched] = useState(false);
  const [boardingTouched, setBoardingTouched] = useState(false);
  const [totalFare, setTotalFare] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [gst, setGst] = useState(0);

  const handleSelectSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
    setSeatsTouched(true);
  };

  const seatStyles = (seat) => {
    if (selectedSeats.includes(seat.id)) return "seat selected";
    return "seat available";
  };
  const ticketFare = selectedSeats.length * 1099;

  const handleContinue = () => {
    navigate("/passenger-details", {
      state: { selectedSeats, totalFare, discount, gst, ticketFare },
    });
  };

  useEffect(() => {
    const calculatedDiscount = selectedSeats.length > 0 ? 150 : 0;
    const calculatedGst = selectedSeats.length > 0 ? 81 : 0;
    const calculatedTotalFare = ticketFare - calculatedDiscount + calculatedGst;

    setDiscount(calculatedDiscount);
    setGst(calculatedGst);
    setTotalFare(calculatedTotalFare);
  }, [selectedSeats, ticketFare]);

  return (
    <div className="container">
      <div className="main-content">
        {["lower", "upper"].map((deck) => (
          <div className="deck" key={deck}>
            <h2>{deck.charAt(0).toUpperCase() + deck.slice(1)} Deck</h2>
            <div className="grid">
              {seatData
                .filter((seat) => seat.deck === deck)
                .map((seat) => (
                  <div
                    key={seat.id}
                    className={seatStyles(seat)}
                    onClick={() => handleSelectSeat(seat.id)}
                  >
                    {seat.id}
                  </div>
                ))}
            </div>
          </div>
        ))}
        <div className="legend">
          <div className="legend-item">
            <div className="seat available"></div>
            <span>Available</span>
          </div>
          <div className="legend-item">
            <div className="seat selected"></div>
            <span>Selected</span>
          </div>
        </div>
      </div>

      <div className="fare-section">
        <h2>Fare Details</h2>
        <div className="fare-details-content">
          <p>
            Seats: {selectedSeats.length ? selectedSeats.join(", ") : "None"}
          </p>
          <p>Total Fare: ₹{ticketFare}</p>

          <div className="route-section">
            <h3>Boarding & Drop-off</h3>

            {!seatsTouched && selectedSeats.length === 0 && (
              <div className="error-message">
                Please select at least one seat.
              </div>
            )}

            <select
              value={boardingPoint}
              onChange={(e) => {
                setBoardingPoint(e.target.value);
                setBoardingTouched(true);
              }}
              disabled={selectedSeats.length === 0}
            >
              <option value="">Select Boarding City</option>
              <option value="Tenkasi">8:30 PM - Tenkasi</option>
            </select>
            {!boardingTouched && !boardingPoint && selectedSeats.length > 0 && (
              <div className="error-message">
                Please select a boarding point.
              </div>
            )}
            <select
              value={dropoffPoint}
              onChange={(e) => setDropoffPoint(e.target.value)}
              disabled={selectedSeats.length === 0}
            >
              <option value="">Select Drop-off City</option>
              <option value="Malumichampatti">04:45 AM Malumichampatti</option>
              <option value="Karpagam College">
                04:50 AM Karpagam College
              </option>
              <option value="Sundarapuram">04:55 AM Sundarapuram</option>
              <option value="Ukkadam">05:00 AM Ukkadam</option>
              <option value="Gandhipuram">05:25 AM Gandhipuram</option>
            </select>
            {!dropoffPoint && selectedSeats.length > 0 && (
              <div className="error-message">
                Please select a drop-off city and point.
              </div>
            )}
          </div>
        </div>
        <div className="booking-container">
          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
