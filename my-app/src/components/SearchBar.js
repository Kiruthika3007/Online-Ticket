import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function SearchBar() {
  const [cities, setCities] = useState([]);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [travelDate, setTravelDate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/cities');
        setCities(res.data.cities);
      } catch (err) {
        console.error('Failed to load cities');
      }
    };
    fetchCities();
  }, []);

  const handleSearch = () => {
    if (fromCity && toCity && travelDate) {
      navigate('/search-results', {
        state: { fromCity, toCity, travelDate }
      });
    } else {
      alert("Please select all fields");
    }
  };

  return (
    <div className="container-box">
      <div className="search-container">
        <div className="input-group">
          {/* From City - only Tenkasi is clickable */}
          <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
            <option value="">From</option>
            {cities.map((city, idx) => (
              <option
                key={idx}
                value={city}
                disabled={city.toLowerCase() !== 'tenkasi'}
              >
                {city}
              </option>
            ))}
          </select>

          {/* To City - only Coimbatore is clickable */}
          <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
            <option value="">To</option>
            {cities.map((city, idx) => (
              <option
                key={idx}
                value={city}
                disabled={city.toLowerCase() !== 'coimbatore'}
              >
                {city}
              </option>
            ))}
          </select>

          {/* Travel Date */}
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />

          <button onClick={handleSearch}>Search Bus</button>
        </div>

        <ul className="routes-list">
          <li>Tenkasi ⇄ Bangalore</li>
          <li>Tenkasi ⇄ Coimbatore</li>
          <li>Tenkasi ⇄ Chennai</li>
        </ul>
      </div>
    </div>
  );
}
