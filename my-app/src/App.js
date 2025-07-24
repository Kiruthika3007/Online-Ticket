import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import DreamDestination from "./components/DreamDestination";
import Contact from "./components/Contact";
import InfoSection from "./components/InfoSection";
import Amenities from "./components/Amenities";
import Admin from "./components/Admin"; // This is the login page
import SearchResultsPage from "./components/SearchResultsPage";
import PassengerDetails from "./components/PassengerDetails";
import "./App.css";

const HomePage = ({ resetKey }) => {
  return (
    <div key={resetKey}>
      <div className="hero">
        <div>
          <img
            src="https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/77083/banner_banner.png"
            alt="Megha Transport Banner"
            height="400px"
            width="1305px"
          />
          <div
            className="hero-container"
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <h1
              className="hero-title"
              style={{
                fontFamily: "Times New Roman, serif",
                fontSize: "36px",
              }}
            >
              Welcome to Megha Transport
            </h1>
          </div>

          <SearchBar />
          <DreamDestination />
          <Amenities />
          <section className="about-us">
            <h2 className="about">About Us</h2>
            <p>
              Megha Transport provides travel solutions to their passengers with
              best-in-class quality by operating brand-new buses with
              well-experienced professionals.
            </p>
            <p>
              Some of the important routes of Megha Transport include Bangalore to
              Trivandrum and Kollam to Madurai.
            </p>
            <p>
              Book Megha Transport tickets online on the website and from your
              mobile with a few easy steps.
            </p>
            <div className="features">
              <span>✔️ Safe And Secure</span>
              <span>🔄 Reschedule</span>
            </div>
          </section>
          <InfoSection />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [resetKey, setResetKey] = useState(0);

  return (
    <Router>
      <div className="app">
        <Header resetHome={() => setResetKey((prevKey) => prevKey + 1)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage resetKey={resetKey} />} />
            <Route path="/admin-login" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search-results" element={<SearchResultsPage />} />
            <Route path="/passenger-details" element={<PassengerDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
