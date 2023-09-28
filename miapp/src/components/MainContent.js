// MainContent.js
import React,{ useState }  from 'react';
//import Products from './pages/products'; // Importa el componente Products
import Products from '../pages/products';
import './MainContent.css'



function MainContent() {
  const [showProducts, setShowProducts] = useState(false);

  const loadProducts = () => {    
    setShowProducts(true);
  };
  return (
    <main>
      {/* Contenido principal */}
      <button onClick={loadProducts}>Cargar Productos</button>
      {showProducts && <Products />} {/* Mostrar Products cuando showProducts sea true */}
    </main>
  );
}

export default MainContent;
