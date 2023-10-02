import React from 'react';
import DataProductos from '../../Data/DataProductos';

function ItemListContainer() {

  return (
    <>
    {/* Pasamos la url a data productos por props */}
    <DataProductos />
    </>

  );
}

export default ItemListContainer;
