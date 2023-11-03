import React, { useState, useEffect } from 'react';

const ProductosApp = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/productos',{
        method: "GET",
        mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);


  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto, index) => (
          <li key={producto.id}>
            Nombre del producto: {producto.nombre}{' '}
            Precio: ${producto.precio}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosApp;