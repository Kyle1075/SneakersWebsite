import React from 'react';
import './ProductCard.scss';

// Define ProductCard as a functional component to render a list of products
function ProductCard({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-card__image" />
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__price">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;