import React, { useState } from 'react';
import Libros from '../componentes/libros';
import Barra from '../componentes/navBar';

export default function Inicio() {
    const [libros, setLibros] = useState([]);
    return (
        <div className="inicio">
            <Barra/>
            <div className='perfilInicio'>
                <div className='perfilUsuario'>
                </div>
                <h1>Tus leidos recientemente</h1>
                    <div className='librosRecientes'>
                        
                    </div>
            </div>
            <div className='recomendaciones'>
                <div className='buscadorInicio'>
                </div>
                <h1 className=""> Recomendaciones </h1>
                <div className="listaRecomendaciones">
                    <div className="librosEnTendencia">
                        <h2>Libros en tendencia</h2>
                        
                    </div>
                    <div className="literaturaArgentina">
                        <h2>Libros en tendencia</h2>
                        
                    </div>
                    <div className="literaturaArgentina">
                        <h2>Libros en tendencia</h2>
                        
                    </div>
                    <div className="literaturaArgentina">
                        <h2>Libros en tendencia</h2>
                        
                    </div> 
                </div>
            </div>
            <div className='sidebarLibros'>
                <img src="autorImagen" alt="" />
                
            </div>
        </div>
    )
}