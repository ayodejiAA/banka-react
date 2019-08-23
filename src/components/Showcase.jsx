import React from 'react';
import { Link } from 'react-router-dom';


const Showcase = () => (
  <section className="board">
    <div className="container">
      <h1>Banking Made Simple</h1>
      <h2>Powering All Banking Operations</h2>
      <p>Our Customers Can Create Acccont Online . View Transaction History</p>
    </div>
    <Link to="/register"><button className="btn" type="button"> Create Account</button></Link>
  </section>
);

export default Showcase;
