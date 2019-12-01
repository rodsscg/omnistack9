/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import api from '../../services/api';

import './styles.css';
import camera from '../../assets/camera.svg';

/**
 * New Spot
 * @param {import('react-router').RouteChildrenProps} props Route children props
 */
const New = ({ history }) => {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => (thumbnail ? URL.createObjectURL(thumbnail) : null), [thumbnail]);

  /**
   * Submit handle
   * @param {Event} event Submit event
   */
  async function handleSubmit(event) {
    const data = new FormData();
    const userId = localStorage.getItem('user');

    event.preventDefault();

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.post('./spots', data, {
      headers: {
        user_id: userId,
      },
    });

    history.push('./dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>

      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={(event) => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
        TECNOLOGIAS *
        <span>(separadas por vírgula)</span>
      </label>
      <input
        id="techs"
        placeholder="Sua empresa incrível"
        value={techs}
        onChange={(event) => setTechs(event.target.value)}
      />

      <label htmlFor="price">
        VALOR DA DIÁRIA
        <span>(em branco para GRATUITO)</span>
      </label>
      <input
        id="price"
        placeholder="Preço"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">Cadastrar</button>
    </form>
  );
};

New.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default New;
