import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Button from "../components/Button";
// import Layout from "../components/Layout";

const DetalleProducto = () => {
  // Ir a buscar los datos de un pokemon y mostrarlos en pantalla

  const [detail, setDetail] = useState();

  const { productid } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productid}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
      });
  }, [productid]);

  if (!detail) return <>Cargando...</>;

  return (
    <>           
<div class="container text-center">
  <div className="row">
    <div className="col-md-3 mx-auto">
      <div className="card">
        <h1 className="card-title">{detail.title}</h1>
        <p className="card-text">{detail.description}</p>
        <img
          src={detail.image}
          className="card-img-top img-fluid img-sm"
          alt={detail.title}
          style={{ maxWidth: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{detail.title}</h5>
          <p className="card-text">Precio: ${detail.price.toFixed(2)}</p>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  </div>
</div>




    </>
    
  );
};

export default DetalleProducto;
