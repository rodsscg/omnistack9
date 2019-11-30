import React, { useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import api from '../../services/api';

/**
 * Login Page
 * @param {import('react-router').RouteChildrenProps} props RouteChildren props
 */
const Login = ({ history }) => {
  const [email, setEmail] = useState('');

  /**
   * Handles submit event
   * @param {Event} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });
    const { _id } = response.data;

    localStorage.setItem('user', _id);
    history.push('/dashboard');
  }

  return (
    <>
      <p>
        Ofereça&nbsp;
        <strong>spots</strong>
        &nbsp;
        para programadores e encontre
        &nbsp;
        <strong>talentos</strong>
        &nbsp;
        para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label> {/*eslint-disable-line*/}
        <input
          id="email"
          type="text"
          placeholder="Seu melhor e-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" className="btn">Entrar</button>
      </form>
    </>
  );
};

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default Login;
