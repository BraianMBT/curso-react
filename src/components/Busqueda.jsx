import { Button, Form } from "react-bootstrap";
import { useGlobalContext } from "../context/GlobalContext";


export default function Busqueda(){
    const { terminoDeBusqueda, setTerminoDeBusqueda } = useGlobalContext();

    const handleBusqueda = (e) => {
        setTerminoDeBusqueda(e.target.value);
    }
    
    return (
      <Form  className='d-flex'>
            <Form.Control value={terminoDeBusqueda} onChange={handleBusqueda}/>
            <Button variant="outline-dark space-left" >Buscar</Button>
          </Form>
    )
  }
