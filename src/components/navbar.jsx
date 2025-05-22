import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useGlobalContext } from '../context/GlobalContext';

export default function BoostrapNavbar() {
  const { carrito } = useGlobalContext(); // Obtener el estado del carrito del contexto
  const itemCount = carrito.length; // Obtener la cantidad de ítems en el carrito

  return (
    <Navbar bg="light" variant="ligth" expand="lg">
      <Container fluid={true}>
        <Navbar.Brand style={{ width: '10rem' }}>
          <Card.Img href="#home"  src="/mercurio_sin_fondo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-collapse' />
        <Navbar.Collapse id='navbar-collapse' className='justify-content-end color-black'>
        <Nav>
          <Form  className='d-flex'>
            <Form.Control/>
            <Button variant="outline-dark space-left" >Buscar</Button>
          </Form>
          <Nav.Link className='text-black' href="#home" >Inicio</Nav.Link>
          <Nav.Link className='text-black' href="/ofertas">Ofertas</Nav.Link>
          <Nav.Link className='text-black' href="/backoffice">Administración</Nav.Link>
          {/* Contenedor para el icono del carrito y la badge */}
          <Nav.Link href="#" className="position-relative"> {/* Agregar position-relative */}
            <i className="bi bi-cart text-black size-[2rem]"></i>
            {/* Mostrar la badge solo si hay ítems en el carrito */}
            {itemCount > 0 && (
              <Badge
                bg="danger" // Color rojo
                pill // Forma redondeada
                className="position-absolute top-0 start-100 translate-middle" // Posicionar arriba a la derecha
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
