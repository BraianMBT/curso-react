import React, { useState, useEffect } from 'react';
import { Container, Button, Table, Modal, Spinner } from 'react-bootstrap';
import ProductosService from '../services/ProductosService';
import ProductoForm from '../components/ProductoForm';
import useDocumentTitle from '../utils/useDocumentTitle';

const Backoffice = () => {
  useDocumentTitle('Panel de Administración');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const fetchProductos = async () => {
    try {
      setLoading(true);
      const data = await ProductosService.getProductos(100, 0); 
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleEdit = (producto) => {
    setProductoAEditar(producto);
    window.scrollTo(0, 0);
  };

  const handleDeleteClick = (producto) => {
    setProductoAEliminar(producto);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (productoAEliminar) {
      try {
        await ProductosService.deleteProducto(productoAEliminar.id);
        setShowModal(false);
        setProductoAEliminar(null);
        fetchProductos(); 
      } catch (error) {
        console.error("Error eliminando producto:", error);
      }
    }
  };

  const handleFormSubmit = () => {
    setProductoAEditar(null);
    fetchProductos();
  };

  return (
    <Container style={{ marginTop: '2rem' }}>
      <h1>Panel de Administración</h1>
      <hr />
      <ProductoForm productoAEditar={productoAEditar} onFormSubmit={handleFormSubmit} />
      <hr />
      <h2>Lista de Productos</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.title}</td>
                <td>${producto.price}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleEdit(producto)} aria-label={`Editar ${producto.title}`}>
                    Editar
                  </Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => handleDeleteClick(producto)} aria-label={`Eliminar ${producto.title}`}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar el producto "{productoAEliminar?.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Backoffice;
