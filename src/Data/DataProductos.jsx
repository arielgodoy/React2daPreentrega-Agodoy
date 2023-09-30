import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="container mt-4">
      <h2>Productos</h2>
      <div className="row">
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  {/* <p className="card-text">{product.description}</p> */}
                  <p className="card-text">Precio: ${product.price.toFixed(2)}</p>
                  <button className="btn btn-info">Ver Detalle</button>
                  <button className="btn btn-primary">Agregar al carrito</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DataProductos;
