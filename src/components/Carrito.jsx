import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { Container, Table, Button, Image } from 'react-bootstrap';
import useDocumentTitle from '../utils/useDocumentTitle';

export default function Carrito() {
  useDocumentTitle('Carrito de Compras');
  const { carrito, eliminarDelCarrito } = useGlobalContext();

  const total = carrito.reduce((sum, item) => sum + item.cantidad * item.producto.price, 0);

  return (
    <Container className="mt-4">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item, index) => (
                <tr key={index}>
                  <td>{item.producto.title}</td>
                  <td>
                    <Image src={item.producto.images[0]} thumbnail style={{ width: '80px' }} />
                  </td>
                  <td>${item.producto.price}</td>
                  <td>{item.cantidad}</td>
                  <td>${item.cantidad * item.producto.price}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => eliminarDelCarrito(item.producto.id)} aria-label={`Eliminar ${item.producto.title} del carrito`}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </Container>
  );
}
