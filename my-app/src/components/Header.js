import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header-contact">
        <span>
          <b>📞 9778530327</b>
        </span>
        <span>
          <b>✉️ krithikakrishram7@gmail.com</b>
        </span>
      </div>
      <div className="header-navigation">
        <ul className="nav-list">
          <li onClick={() => (window.location.href = "/")}>Home</li>

          <li className="dropdown" ref={dropdownRef}>
            <span
              role="button"
              tabIndex="0"
              aria-haspopup="true"
              aria-expanded={showDropdown}
              onClick={handleDropdownClick}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleDropdownClick();
              }}
            >
              Manage Ticket ▾
            </span>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li onClick={() => navigate("/print-ticket")}>Print Ticket</li>
                <li onClick={() => navigate("/edit-ticket")}>Edit Ticket</li>
                <li onClick={() => navigate("/cancel-ticket")}>
                  Cancel Ticket
                </li>
                <li onClick={() => navigate("/download-ticket")}>
                  Download Ticket
                </li>
                <li onClick={() => navigate("/send-sms-email")}>
                  Send SMS / Email
                </li>
                <li onClick={() => navigate("/reschedule-ticket")}>
                  Reschedule Ticket
                </li>
              </ul>
            )}
          </li>

          <li onClick={() => navigate("/trackmybus")}>Track My Bus</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        <div className="my-buttons">
          <button className="login-btn" onClick={() => navigate("/admin-login")}>
  Admin Login
</button>

        </div>
      </div>
    </header>
  );
};

export default Header;
