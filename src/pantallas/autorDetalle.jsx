import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AutorService from "../services/autor.services.js";
import { Link } from "react-router-dom";

export default function AutorDetalle() {
  console.log("prueba");

  const { id } = useParams(); 
  const [autor, setAutor] = useState(null);

  useEffect(() => {
    AutorService.get(id)
      .then(res => setAutor(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!autor) return <p>Cargando...</p>;

  return (
    <div className="autorProfile">
      <Link to="/autores" className="volver">← Volver</Link>

      <div className="autorInfo">
        {autor.imagen && (
          <img 
            src={autor.imagen}
            alt={`${autor.nombre} ${autor.apellido}`}
            className="autorImg"
          />
        )}

        <h1>{autor.nombre} {autor.apellido}</h1>
        <p><strong>Nacimiento:</strong> {autor.nacimiento}</p>
      </div>

      <h2>Libros del autor</h2>

      {autor.libros?.length === 0 ? (
        <p>No hay libros para este autor.</p>
      ) : (
        <ul className="autorLibros">
          {autor.libros.map(lib => (
            <li key={lib.id} className="autorLibroItem">
              <Link to={`/libro/${lib.id}`} className="libroLink">
                {lib.imagen && (
                  <img src={lib.imagen} alt={lib.titulo} className="libroImg" />
                )}
                <p>{lib.titulo}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
