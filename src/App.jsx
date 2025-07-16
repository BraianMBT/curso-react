import './App.css'
import React from 'react';
import BoostrapNavbar from './components/navbar'
import ProductosList from './components/ProductosList'
import { GlobalProvider, useGlobalContext } from './context/GlobalContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carrito from './components/Carrito';
import Login from './components/Login';
import Backoffice from './pages/Backoffice';

const Ofertas = () => <h2>Página de Ofertas</h2>;

function App() {
  const RutaProtegida = ({ element }) => {
    const { usuario } = useGlobalContext(); 
    return usuario ? element : <Navigate to="/login" />;
  };

  return (
    <GlobalProvider>
      <BrowserRouter basename="/curso-react/">
        <BoostrapNavbar/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<ProductosList />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/backoffice" element={<RutaProtegida element={<Backoffice />} />} />
          <Route path="/carrito" element={<RutaProtegida element={<Carrito />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} /> 

        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
