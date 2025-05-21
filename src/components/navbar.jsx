import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export default function BoostrapNavbar() {
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
          <Nav.Link><i className="bi bi-cart text-black size-[2rem]"></i></Nav.Link>          
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
