import React, { useEffect, useState } from 'react';
import Navbar from '../componentes/navBar';
import AutorService from '../services/autor.services.js';
import AutorCard from '../componentes/autorPresentacion.jsx';

export default function Autores() {
  const [q, setQ] = useState("");
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    AutorService.getAll()
      .then(res => setAutores(res.data))
      .catch(err => console.error(err));
  }, []);
  const autoresFiltrados = autores.filter(a =>
    `${a.nombre} ${a.apellido}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="catalogoAutores">
      <Navbar />
      
      <div className="catalogoContenido">
        <div className="buscadorInicio">
          <div className="searchBox">
            <span className="iconLupa" aria-hidden></span>
            <input
              className="inputBusqueda"
              placeholder="Buscar autores..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>

        <section className="seccionAutores">
          <div className="seccionHeader">
            <h2 className="tituloPrincipal">Autores</h2>
          </div>

          {autoresFiltrados.length === 0 ? (
            <p>No se encontraron autores.</p>
          ) : (
            <div className="gridAutores">
              {autoresFiltrados.map(a => (
                <AutorCard key={a.id} autor={a} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
