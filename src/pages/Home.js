import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 200 },
  { id: 3, name: 'Product C', price: 300 },
];

const Home = () => {
  return (
    <div>
      <h1>Welcome to E-Shop</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
