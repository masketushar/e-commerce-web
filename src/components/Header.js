import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">E-Shop</Link>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;