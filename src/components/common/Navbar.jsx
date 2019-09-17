import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <NavLink to="/signup">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);

export default Navbar;
