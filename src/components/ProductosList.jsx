import { Container, Row, Col, Spinner } from "react-bootstrap"
import React, { useEffect, useState, useMemo } from 'react';
import ProductCard from './Card'
import Paginacion from "./Paginacion"
import { useGlobalContext } from '../context/GlobalContext';
import ProductosService from '../services/ProductosService';
import useDocumentTitle from '../utils/useDocumentTitle';

export default function ProductosList(){
    useDocumentTitle('Inicio - Tienda');
    const { paginacion, setPaginacion, productos, setProductos, terminoDeBusqueda } = useGlobalContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const limit = paginacion.limit || 10;
                const offset = paginacion.offset || 0;
                const data = await ProductosService.getProductos(limit, offset, terminoDeBusqueda);
                setProductos(data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [paginacion, setProductos, terminoDeBusqueda]);

    return (
        <Container style={{marginTop: '1rem'}}>
            {loading ? (
                <div className="d-flex justify-content-center" style={{marginBottom:"24px"}}>
                    <Spinner animation="border" role="status">
                    </Spinner>
                </div>
            ) : (
                <Row>
                    {productos.map(producto => (
                        <Col key={producto.id} sm={6} md={4} lg={3} className="mb-4">
                            <ProductCard props={producto} />
                        </Col>
                    ))}
                </Row>
            )}
            <Paginacion cantidad={6} setPaginacionContext={setPaginacion} />
        </Container>
    )
}
