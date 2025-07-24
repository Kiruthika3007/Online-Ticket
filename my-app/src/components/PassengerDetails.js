import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import "./styles.css";

const PassengerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    selectedSeats = [],
    totalFare = 0,
    discount = 0,
    gst = 0,
    ticketFare = 0,
  } = location.state || {};

  const [isChecked, setIsChecked] = useState(false);
  const [passengerDetails, setPassengerDetails] = useState(
    selectedSeats.map(() => ({
      name: "",
      age: "",
      gender: "",
    }))
  );

  const handleNameChange = (index, value) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[index].name = value;
    setPassengerDetails(updatedDetails);
  };

  const handleAgeChange = (index, value) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[index].age = value;
    setPassengerDetails(updatedDetails);
  };

  const handleGenderChange = (index, gender) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[index].gender = gender;
    setPassengerDetails(updatedDetails);
  };

  const areAllNamesFilled = () => {
    return passengerDetails.every((passenger) => passenger.name.trim() !== "");
  };

  const handleProceedPayment = () => {
    const currentDate = new Date().toLocaleDateString();

    Swal.fire({
      title: "Booking Confirmed!",
      text: `${passengerDetails
        .map((passenger) => passenger.name)
        .join(", ")}, your travel successfully booked on ${currentDate}`,
      icon: "success",
      confirmButtonText: "OK",
      timer: 3000,
      willClose: () => {
        navigate("/");
      },
    });
  };

  const handleTermsClick = () => {
    alert("Terms & Conditions content goes here.");
  };

  const handleCancellationClick = () => {
    alert("Cancellation Policy content goes here.");
  };

  return (
    <div className="details-container">
      <div className="section passenger-details">
        <h3>
          Passenger Details{" "}
          <span className="reselect" onClick={() => navigate(-1)}>
            Reselect Seats
          </span>
        </h3>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Seat No.</th>
                <th>Gender</th>
                <th>Fare</th>
              </tr>
            </thead>
            <tbody>
              {selectedSeats.length > 0 ? (
                selectedSeats.map((seat, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        placeholder="Name"
                        value={passengerDetails[index]?.name || ""}
                        onChange={(e) =>
                          handleNameChange(index, e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="Age"
                        value={passengerDetails[index]?.age || ""}
                        onChange={(e) =>
                          handleAgeChange(index, e.target.value)
                        }
                      />
                    </td>
                    <td>{seat}</td>
                    <td>
                      <label>
                        <input
                          type="radio"
                          name={`gender-${index}`}
                          checked={passengerDetails[index]?.gender === "Male"}
                          onChange={() => handleGenderChange(index, "Male")}
                        />{" "}
                        Male
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`gender-${index}`}
                          checked={passengerDetails[index]?.gender === "Female"}
                          onChange={() => handleGenderChange(index, "Female")}
                        />{" "}
                        Female
                      </label>
                    </td>
                    <td>₹{ticketFare / selectedSeats.length}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No seats selected</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="fare-summary">
        <h3>Fare Summary</h3>
        <div className="fare-item">
          <span>Ticket Fare:</span>
          <span>₹{ticketFare}</span>
        </div>
        <div className="fare-item">
          <span>Discount:</span>
          <span>- ₹{discount}</span>
        </div>
        <div className="fare-item">
          <span>GST:</span>
          <span>+ ₹{gst}</span>
        </div>
        <div className="fare-total">
          <span>Total Fare:</span>
          <span>₹{totalFare}</span>
        </div>
      </div>

      <div className="payment-section">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              if (areAllNamesFilled()) {
                setIsChecked(!isChecked);
              }
            }}
            disabled={!areAllNamesFilled()}
          />
          <span>
            I agree to all the{" "}
            <button className="link-button" onClick={handleTermsClick}>
              Terms & Conditions
            </button>{" "}
            and{" "}
            <button className="link-button" onClick={handleCancellationClick}>
              Cancellation Policy
            </button>
          </span>
        </label>

        <button
          className="proceed-btn"
          disabled={!isChecked}
          onClick={handleProceedPayment}
        >
          Proceed to Payment
        </button>

        <p className="redirect-message">
          You will be redirected to a secured payment gateway to process
          payment.
        </p>
      </div>
    </div>
  );
};

export default PassengerDetails;
