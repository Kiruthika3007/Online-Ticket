import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; 

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newCity, setNewCity] = useState('');
  const [cities, setCities] = useState([]);
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });
      if (res.data.success) {
        setIsLoggedIn(true);
        fetchCities();
      } else {
        alert('Invalid credentials');
      }
    } catch {
      alert('Login failed');
    }
  };

  const fetchCities = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/cities');
      setCities(res.data.cities);
    } catch (err) {
      console.error('Failed to fetch cities');
    }
  };

  const handleAddCity = async () => {
    if (!newCity.trim()) return;

    try {
      const res = await axios.post('http://localhost:5000/api/cities', {
        city: newCity.trim(),
      });
      setMessage(res.data.message);
      setNewCity('');
      fetchCities();
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error adding city');
    }
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <h2>Welcome, Admin</h2>
          <input
            type="text"
            placeholder="New city"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />
          <button onClick={handleAddCity}>Add City</button>
          {message && <p>{message}</p>}
          <div className="city-list">
            <h3>All Cities:</h3>
            <ul>
              {cities.map((city, idx) => (
                <li key={idx}>{city}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
