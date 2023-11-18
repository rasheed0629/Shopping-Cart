import React from 'react';

function ProductList({ products, addingToCart }) {
  const handleAddToCart = prods => {      
    addingToCart(prods);
  };
  

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
