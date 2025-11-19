import React, { useEffect, useState } from 'react';
import Navbar from '../componentes/navBar';
import LibrosService from '../services/libros.services.js';
import { Link } from 'react-router-dom';

export default function Catalogo() {
  const [q, setQ] = useState('');
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    LibrosService.getByGenero("novelas")
      .then(res => setLibros(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="catalogo">
      <Navbar />
      <div className="catalogoContenido">
        <div className="buscadorInicio">
          <div className="searchBox">
            <span className="iconLupa" aria-hidden></span>
            <input
              className="inputBusqueda"
              placeholder="Buscar libros, autores..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>

        <section className="seccionLibros">
        <div className="contenedorNovelas">
          <div className="seccionHeader">
            <h2 className="tituloPrincipal">Novelas</h2>
            <a href="#" className="verMas">Ver más</a>
          </div>
            {libros.length === 0 ? (
              <p>No hay novelas.</p>
            ) 
          :
            (
            <ul>
              {libros.map(l => (
                <li key={l.id}>
                  
                  {l.imagen && (<img src={l.imagen} alt={l.titulo} style={{ 
                    width: "120px",
                    height: "auto", 
                    borderRadius: "8px" 

                  }} 
                  />
                  )}
                  <Link to={`/libro/${l.id}`} className="libroLink">
                    <p>{l.titulo}</p>
                  </Link>- 
                  <Link to={`/autor/${l.autor?.id}`} className="autorLink">
                  {l.autor?.apellido}
                  </Link>

                  <br />
                  {l.descripcion}
                </li>
              )
              )
              }
            </ul>
            )
          }
        </div>
        </section>
      </div>
    </div>
  );
}
