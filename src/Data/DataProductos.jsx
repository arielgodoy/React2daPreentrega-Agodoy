import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LeeProducto from './LeeProducto';


function DataProductos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los productos desde la FakeStore API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Llamar a la función para obtener los productos
    fetchProducts();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Productos</h2>
      <div className="row">
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          products.map((prod) => (
            
            <LeeProducto producto={prod} key={prod.id}/> 
            
          ))
        )}
      </div>
    </div>
  );
}

export default DataProductos;
