import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalQuantity);

  return (
    <header>
      <nav>
        <Link to="/products">Products</Link> |{' '}
        <Link to="/cart">
          Cart <span>({totalItems})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
