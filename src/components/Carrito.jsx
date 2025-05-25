import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { Container, ListGroup, Button, Image } from 'react-bootstrap';

export default function Carrito() {
  const { carrito, eliminarDelCarrito } = useGlobalContext();

  return (
    <Container className="mt-4">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ListGroup>
          {carrito.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center flex-grow-1"> 
                <Image src={item.producto.images[0]} thumbnail style={{ width: '80px', marginRight: '15px' }} /> 
                <div className="d-flex flex-column flex-md-row align-items-md-center"> 
                  <h5 className="mb-1 mb-md-0 me-md-3">{item.producto.title}</h5>
                  <p className="mb-1 mb-md-0 me-md-3">Cant: {item.cantidad}</p>
                  <p className="mb-1 mb-md-0 me-md-3">Precio: ${item.producto.price}</p>
                  <p className="mb-0">Subtotal: ${item.cantidad * item.producto.price}</p>
                </div>
              </div>
              <Button variant="danger" size="sm" onClick={() => eliminarDelCarrito(item.producto.id)}>Eliminar</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
}
