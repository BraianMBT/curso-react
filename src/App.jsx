import './App.css'
import React, { useState } from 'react';
import BoostrapNavbar from './components/navbar'
import ProductosList from './components/ProductosList'
import { GlobalProvider } from './context/GlobalContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Carrito from './components/Carrito';
import Login from './components/Login';

const Ofertas = () => <h2>Página de Ofertas</h2>;
const Administracion = () => <h2>Página de Administración</h2>;

function App() {
  const [estaLogueado, setEstaLogueado] = useState(false);

  const manejarLogin = (logueado) => {
    setEstaLogueado(logueado);
  };

  const RutaProtegida = ({ element }) => {
    return estaLogueado ? element : <Navigate to="/login" />;
  };

  return (
    <GlobalProvider>
      <BrowserRouter>
        <BoostrapNavbar/>
        <Routes>
          <Route path="curso-react/" element={<ProductosList />} />
          <Route path="/" element={<ProductosList />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/backoffice" element={<RutaProtegida element={<Administracion />} />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login onLogin={manejarLogin} />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
