import { CardGroup, Container } from "react-bootstrap"
import ProductCard from './Card'
import Paginacion from "./Paginacion"

export default function ProductosList(){
    return (
        <Container>
            <CardGroup>
                
            </CardGroup>
            <Paginacion cantidad={6} />
        </Container>
    )
}