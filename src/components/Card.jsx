import { Button, Card } from "react-bootstrap";
import LimitarPalabras from "../utils/palabras";

export default function ProductCard({props}){
    var {id, title, price, description, images } = {...props}
    var descripcion_acortada = LimitarPalabras(description, 20)
    return (
        <Card style={{maxWidth:'220px'}}>
            <Card.Img variant="top" style={{ maxWidth: '220px', maxHeight: '250px' }} src={images != null ? images[0] : ''} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{descripcion_acortada}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <Button variant="outline-success">
                    <i className="bi bi-cart text-black size-[3rem]"></i>
                    <span style={{marginLeft: '2px'}}>Agregar al carrito</span>
                </Button>
            </Card.Body>
        </Card>
    )
}