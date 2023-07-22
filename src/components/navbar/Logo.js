import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Styles & Images
import './Logo.css';
import Snow from '../../assets/svg/snowflake-light.svg';

export default function Logo() {
  const location = useLocation();
  return (
    <li className="site-logo">
      <img className="spin" src={Snow} alt="Kazy website logo" />
      {location.pathname === '/' ? (
        <span className="brand noselect">Kazy</span>
      ) : (
        <Link to="/">
          <span className="brand noselect">Kazy</span>
        </Link>
      )}
    </li>
  );
}
