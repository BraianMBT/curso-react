import { Pagination } from "react-bootstrap"
import React, { useState, useEffect } from 'react';

export default function Paginacion({ cantidad, setPaginacionContext }){
    const [paginaActiva, setPaginaActiva] = useState(1);
    const itemsPorPagina = 10; 
    var cantidad_paginas = Array.from({length:cantidad}, (v, i) => i + 1); 

    const handlePageChange = (pageNumber) => {
        setPaginaActiva(pageNumber);
        const newOffset = (pageNumber - 1) * itemsPorPagina;
        setPaginacionContext({ limit: itemsPorPagina, offset: newOffset });
    };
    return(
        <Pagination className="d-flex justify-content-center">
            <Pagination.First onClick={() => handlePageChange(1)} disabled={paginaActiva === 1} />
            <Pagination.Prev onClick={() => handlePageChange(paginaActiva - 1)} disabled={paginaActiva === 1} />
            {cantidad_paginas.map(nro_pagina =>
                <Pagination.Item
                    key={nro_pagina}
                    active={nro_pagina === paginaActiva}
                    onClick={() => handlePageChange(nro_pagina)}
                >
                    {nro_pagina}
                </Pagination.Item>
            )}
            <Pagination.Next onClick={() => handlePageChange(paginaActiva + 1)} disabled={paginaActiva === cantidad} />
            <Pagination.Last onClick={() => handlePageChange(cantidad)} disabled={paginaActiva === cantidad} />
        </Pagination>
    )
}
