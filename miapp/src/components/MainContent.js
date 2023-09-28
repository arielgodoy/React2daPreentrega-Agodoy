import React, { useState } from 'react';
import Products from '../pages/products';

function MainContent() {
  const [showProducts, setShowProducts] = useState(false);

  const loadProducts = () => {
    setShowProducts(true);
  };
  return (
    <>
      <button onClick={loadProducts}>Cargar Productos</button>
      {showProducts && <Products />} {/* Mostrar Products cuando showProducts sea true */}
    </>
  );
}

export default MainContent;
