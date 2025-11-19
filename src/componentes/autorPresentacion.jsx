import { Link } from "react-router-dom";
export default function AutorCard({ autor }) {
  return (
    <div className="autorCard">
        <Link to={`/autor/${autor.id}`} className="autorLink">
          <h3>{autor.nombre} {autor.apellido}</h3>
        </Link>
        <p>Nacimiento: {autor.nacimiento}</p>
      {autor.imagen && (
        <img
          src={autor.imagen}
          alt={`${autor.nombre} ${autor.apellido}`}
          className="autorFoto"
        />
      )}
    </div>
  );
}
