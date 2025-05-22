import { Container, Row, Col } from "react-bootstrap"
import React, { useEffect, useState } from 'react';
import ProductCard from './Card'
import Paginacion from "./Paginacion"
import { useGlobalContext } from '../context/GlobalContext';
import ProductosService from '../services/ProductosService';

export default function ProductosList(){
    const { paginacion, setPaginacion, productos, setProductos } = useGlobalContext();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const limit = paginacion.limit || 10;
                const offset = paginacion.offset || 0;
                const data = await ProductosService.getProductos(limit, offset);
                setProductos(data); 
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };

        fetchProducts();
    }, [paginacion, setProductos]);

    return (
        <Container style={{marginTop: '1rem'}}>
            <Row>
                {productos.map(producto => (
                    <Col key={producto.id} sm={6} md={4} lg={3} className="mb-4">
                        <ProductCard props={producto} />
                    </Col>
                ))}
            </Row>
            <Paginacion cantidad={6} setPaginacionContext={setPaginacion} />
        </Container>
    )
}
