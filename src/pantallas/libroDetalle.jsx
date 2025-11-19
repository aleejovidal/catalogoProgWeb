import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LibrosService from "../services/libros.services.js";
import { Link } from "react-router-dom";

export default function LibroDetalle() {
  console.log("prueba");

  const { id } = useParams(); 
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    LibrosService.get(id)
      .then(res => setLibro(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!libro) return <p>Cargando...</p>;

  return (
    <div className="libroProfile">
      <Link to="/catalogo" className="volver">← Volver</Link>

      <div className="libroInfo">
        {libro.imagen && (
          <img 
            src={libro.imagen}
            alt={`${libro.titulo} ${libro.descripcion}`}
            className="libroImg"
          />
        )}

        <h1>{libro.titulo} </h1>
        <h2>
          {libro.descripcion}
          </h2>
      </div>
    </div>
  );
}
