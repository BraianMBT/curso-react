import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [paginacion, setPaginacion] = useState({limit:10, offset: 0});
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]); 
  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => [...prevCarrito, producto]);
  };
  return (
    <GlobalContext.Provider value={{ usuario, setUsuario, paginacion, setPaginacion, carrito, setCarrito, productos, setProductos, agregarAlCarrito }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
