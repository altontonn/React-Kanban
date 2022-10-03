import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import pic from '../img/planet.png';
import RouterNavLink from './Router';

function Nav() {
  return (
    <div className="main">
      <div className="navbarMenu">
        <div className="logo">
          <img className="img" src={pic} alt="logo" />
          <h1>Space Travelers Hub</h1>
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/rockets">Rockets</Link></li>
            <li><Link to="/missions">Missions</Link></li>
            <li><Link to="/">My Profile</Link></li>
          </ul>
        </div>
      </div>
      <RouterNavLink />
    </div>
  );
}
export default Nav;
