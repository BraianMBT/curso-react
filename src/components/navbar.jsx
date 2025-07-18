import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import Busqueda from './Busqueda';
export default function BoostrapNavbar() {
  const { carrito, usuario, logout } = useGlobalContext();
  const itemCount = carrito.length;
  return (
    <Navbar bg="light" variant="ligth" expand="lg">
      <Container fluid={true}>
        <Navbar.Brand style={{ width: '10rem' }}>
          <Link to="/">
            <Card.Img src="https://i.imgur.com/ha4A2yc.png" style={{ width: '100%' }} /> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-collapse' />
        <Navbar.Collapse id='navbar-collapse' className='justify-content-end color-black'>
        <Nav>
          <Busqueda/>
          <Nav.Link as={Link} to="/" className='botones-navbar'>Inicio</Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className='botones-navbar'>Ofertas</Nav.Link>
          {usuario ? (
            <>
              <Nav.Link as={Link} to="/backoffice" className='botones-navbar'>Administración</Nav.Link>
              <Nav.Link as={Link} to="/" onClick={logout} className='botones-navbar'>Cerrar Sesion</Nav.Link>
              <Nav.Link as={Link} to="/carrito" className="position-relative">
                <i className="bi bi-cart botones-navbar size-[2rem]"></i>
                {itemCount > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {itemCount}
                    <span className="visually-hidden">items en el carrito</span>
                  </Badge>
                )}
              </Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="/login" className='botones-navbar'>Iniciar sesion</Nav.Link>
          )}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
