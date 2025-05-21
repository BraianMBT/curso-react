import { Pagination } from "react-bootstrap"


export default function Paginacion({cantidad}){
    var cantidad_paginas = Array.from({length:cantidad}, (v, i) => i)
    console.log(cantidad_paginas)
    return(
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {cantidad_paginas.map(nro_pagina => 
                <Pagination.Item>{nro_pagina}</Pagination.Item>
            )}
            <Pagination.Next />
      <Pagination.Last />
        </Pagination>
    )
}