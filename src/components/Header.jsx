import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './common/Navbar';

const Header = () => (
  <header className="sticky__header main__header">
    <div className="container max__width">
      <div id="branding">
        <h1>
          <Link to="/">Banka</Link>
        </h1>
      </div>
      <Navbar />
    </div>
  </header>
);

export default Header;
