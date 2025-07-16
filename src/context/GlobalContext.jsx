import { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  useEffect(() => {
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
    } else {
      localStorage.removeItem('usuario');
    }
  }, [usuario]);

  const [paginacion, setPaginacion] = useState({limit:10, offset: 0});
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('');

  
const agregarAlCarrito = (producto) => {
  setCarrito(prevCarrito => {
    const index = prevCarrito.findIndex(item => item.producto.id === producto.id);
    if (index != -1) {
      const nuevoCarrito = [...prevCarrito];
      var nuevaCantidad = nuevoCarrito[index].cantidad + 1
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

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <GlobalContext.Provider value={{ usuario, setUsuario, paginacion, setPaginacion, carrito, setCarrito, productos, setProductos, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, terminoDeBusqueda, setTerminoDeBusqueda }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
