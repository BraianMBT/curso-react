import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const usuarioHardcodeado = {
    correo: 'admin@mail.com',
    contrasena: 'admin', 
    rol: ['admin'],
    imagen: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  };

  const handleLogin = () => {
    if (username === usuarioHardcodeado.correo && password === usuarioHardcodeado.contrasena) {
      onLogin(true);
      navigate('/backoffice'); 
    } else {
      onLogin(false);
      alert('Usuario o contraseña incorrectos'); 
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card p-4" style={{ width: '18rem', backgroundColor: 'white'}}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-dark" type="button" onClick={handleLogin}>Iniciar Sesion</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
