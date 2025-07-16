import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ProductosService from '../services/ProductosService';

const ProductoForm = ({ productoAEditar, onFormSubmit }) => {
  const [producto, setProducto] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    images: ['']
  });

  useEffect(() => {
    if (productoAEditar) {
      setProducto(productoAEditar);
    }
  }, [productoAEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProducto(prev => ({ ...prev, images: [e.target.value] }));
  };

  const validarFormulario = () => {
    if (!producto.title.trim()) {
      toast.error('El nombre es obligatorio.');
      return false;
    }
    if (isNaN(producto.price) || Number(producto.price) <= 0) {
      toast.error('El precio debe ser un número mayor a 0.');
      return false;
    }
    if (producto.description.length < 10) {
      toast.error('La descripción debe tener al menos 10 caracteres.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }

    try {
      if (producto.id) {
        await ProductosService.updateProducto(producto.id, producto);
        toast.success('Producto actualizado con éxito.');
      } else {
        await ProductosService.createProducto(producto);
        toast.success('Producto creado con éxito.');
      }
      onFormSubmit(); // Para refrescar la lista de productos
    } catch (err) {
      toast.error('Error al guardar el producto. Intente de nuevo.');
      console.error(err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>{producto.id ? 'Editar Producto' : 'Agregar Producto'}</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={producto.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={producto.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={producto.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={producto.category}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>URL de la Imagen</Form.Label>
              <Form.Control
                type="text"
                name="images"
                value={producto.images[0]}
                onChange={handleImageChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {producto.id ? 'Actualizar' : 'Guardar'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductoForm;
