import React, { useEffect, useState } from "react";
import axios from "axios";
import LeeProducto from "./LeeProducto";
import { useParams } from "react-router-dom";

const DataProductosFiltered= () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { categoria } = useParams();
  

  useEffect(() => {    
    const fetchProducts = async () => {
      try {
        console.log(categoria);
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoria}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchProducts();
  }, [categoria]);

  return (
    <div className="container mt-3">
      <h2>Productos</h2>
      <div className="row">
        {/* cargando hasta que se resuelve el fetch de la APi*/ }
        {loading ? (
          <div class="spinner">
            <div class="spinner-border" role="status">
            </div>
        </div>
        ) : (
          products.map((prod) => <LeeProducto producto={prod} key={prod.id} />)
        )}
      </div>
    </div>
  );
}

export default DataProductosFiltered;