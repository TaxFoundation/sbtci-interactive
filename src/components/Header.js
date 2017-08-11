import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>SBTCI</h1>
      <nav>
        <Link to="/">Overview</Link>
      </nav>
    </header>
  );
}

export default Header;
