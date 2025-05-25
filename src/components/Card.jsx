import { Button, Card } from "react-bootstrap";
import LimitarPalabras from "../utils/palabras";
import { useGlobalContext } from '../context/GlobalContext';

export default function ProductCard({props}){
    const { agregarAlCarrito } = useGlobalContext();
    var {id, title, price, description, images } = {...props}
    var producto = { id, title, price, description, images }
    var descripcion_acortada = LimitarPalabras(description, 15)
    var title = LimitarPalabras(title, 4)
    return (
        <Card style={{maxWidth:'220px', maxHeight:'550px'}}>
            <Card.Img variant="top" style={{ maxWidth: '220px', maxHeight: '250px' }} src={images != null ? images[0] : ''} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{descripcion_acortada}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <Button variant="outline-success" onClick={()=>agregarAlCarrito(producto)}>
                    <i className="bi bi-cart text-black size-[3rem]"></i>
                    <span style={{marginLeft: '2px'}}>Agregar al carrito</span>
                </Button>
            </Card.Body>
        </Card>
    )
}