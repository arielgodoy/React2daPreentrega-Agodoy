import React from 'react';
import DataProductos from '../../Data/DataProductos';

function ItemListContainer() {

  return (
    <>
    {/* Pasamos la url a data productos por props */}
    <DataProductos url={'https://fakestoreapi.com/products/1'} />
    </>

  );
}

export default ItemListContainer;
