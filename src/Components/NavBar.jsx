import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {

  return(
    <ul className="nav">
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout </NavLink>
      </li>
    </ul>
  )
};

export default NavBar;