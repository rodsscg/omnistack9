import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

const Dashboard = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const userId = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id: userId },
      });

      setSpots(response.data);
    }
    loadSpots();
  }, []);

  return (
    <>
      <ul className="spot-list">
        {spots.map((spot) => (
          <li key={spot._id}> {/*eslint-disable-line*/}
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button type="button" className="btn">Cadastrar novo spot</button>
      </Link>
    </>
  );
};

export default Dashboard;
