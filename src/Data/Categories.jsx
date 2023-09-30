import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener las categorías desde la FakeStore API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Llamar a la función para obtener las categorías
    fetchCategories();
  }, []);

  return (
    <>
      
      {loading ? (
        <p>Cargando categorías...</p>
      ) : (
        <ul>
          {categories.map((category, index) => (
            //<li key={index}>{category}</li>
            <Link className="dropdown-item" key={index} to="/type/{category}">{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
          ))}
        </ul>
      )}
    </>
  );
}

export default Categories;
