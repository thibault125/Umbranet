import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logo} alt="Logo" className='navbar-logo' />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Accueil
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/missions" className="navbar-link">
              Missions
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/profils" className="navbar-link">
              Profiles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
