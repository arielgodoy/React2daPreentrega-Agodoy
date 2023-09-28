import React, { useState, useEffect } from 'react';

const products = [
    { id: "1", name: "laptop", price: "20", brand: "20", color: "Silver" },
    { id: "2", name: "smartphone", price: "10", brand: "Samsung", color: "Black" },
    { id: "3", name: "tablet", price: "15", brand: "Apple", color: "Space Gray" },
    { id: "4", name: "teclado mecánico", price: "5", brand: "Logitech", color: "Black" },
    { id: "5", name: "ratón inalámbrico", price: "8", brand: "Microsoft", color: "Gray" },
];

function Products() {
    const [loadedProducts, setLoadedProducts] = useState([]);
  
    useEffect(() => {
      // Simulamos una solicitud asincrónica para cargar los productos
      const fetchData = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(products); // Resolvemos la Promesa con la lista de productos
          }, 0); // Simulamos un retardo de 2 segundos
        });
      };
  
      fetchData().then((data) => {
        setLoadedProducts(data); // Una vez que se resuelve la Promesa, actualizamos el estado
      });
    }, []);
  
    return (
      <div>
        <h2>Lista de Productos</h2>
        {loadedProducts.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <ul>
            {loadedProducts.map((product) => (
              <li className='item' key={product.id}>
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>Marca: {product.brand}</p>
                <p>Color: {product.color}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Products;
  