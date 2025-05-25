import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function BoostrapNavbar() {
  const { carrito } = useGlobalContext();
  const itemCount = carrito.length;
  const busqueda = () => {
    return (
      <Form  className='d-flex'>
            <Form.Control/>
            <Button variant="outline-dark space-left" >Buscar</Button>
          </Form>
    )
  }
  return (
    <Navbar bg="light" variant="ligth" expand="lg">
      <Container fluid={true}>
        <Navbar.Brand style={{ width: '10rem' }}>
          <Link to="/">
            <Card.Img src="./mercurio_sin_fondo.png" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-collapse' />
        <Navbar.Collapse id='navbar-collapse' className='justify-content-end color-black'>
        <Nav>
          {/* busqueda()*/}
          <Nav.Link as={Link} to="/" className='text-black'>Inicio</Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className='text-black'>Ofertas</Nav.Link>
          <Nav.Link as={Link} to="/backoffice" className='text-black'>Administración</Nav.Link>
          <Nav.Link as={Link} to="/login" className='text-black'>Iniciar sesion</Nav.Link>
          <Nav.Link as={Link} to="/carrito" className="position-relative">
            <i className="bi bi-cart text-black size-[2rem]"></i>
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
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
