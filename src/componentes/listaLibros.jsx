import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LibrosService from "../services/libros.services.js";
import AutorServices from "../services/autor.services.js";
function ListaLibros() {
  const { genero } = useParams();
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    LibrosService.getByGenero(genero)
      .then(res => setLibros(res.data))
      .catch(err => console.error(err));
    AutorServices.getAll()
      .then(res => {
      const mapa = {};
      res.data.forEach(a => mapa[a.id] = a);
      setAutores(mapa);
    })
      .catch(err => console.error(err));
  }, [genero]);


  return (
    <div>
      <h2>Categoria: {genero}</h2>

      {libros.length === 0 ? (
        <p>No hay libros en esta categoría</p>
      ) : (
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
              <strong>{l.titulo}</strong> <br />
              Autor: {autores[l.autorId] ? autores[l.autorId].nombre : "Desconocido"}
              <br />
              {l.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaLibros;
