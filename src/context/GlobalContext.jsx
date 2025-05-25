import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [paginacion, setPaginacion] = useState({limit:10, offset: 0});
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);

  
const agregarAlCarrito = (producto) => {
  setCarrito(prevCarrito => {
    const index = prevCarrito.findIndex(item => item.producto.id === producto.id);
    if (index != -1) {
      const nuevoCarrito = [...prevCarrito];
      nuevaCantidad = nuevoCarrito[index].cantidad + 1
      nuevoCarrito[index] = {
        ...nuevoCarrito[index],
        cantidad: nuevaCantidad
      };
      return nuevoCarrito;
    }
    return [...prevCarrito, { producto, cantidad: 1 }];
  });
};


  const eliminarDelCarrito = (productoId) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.producto.id !== productoId));
  };

  return (
    <GlobalContext.Provider value={{ usuario, setUsuario, paginacion, setPaginacion, carrito, setCarrito, productos, setProductos, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
