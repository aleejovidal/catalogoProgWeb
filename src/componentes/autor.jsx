import { useNavigate } from 'react-router-dom';

export default function Autor({ id, nombre, foto }) {
  const navigate = useNavigate();
  const src = foto || 'https://via.placeholder.com/90x130/6A3B3B/FFFFFF?text=%20';

  const handleClick = () => {
    if (id !== undefined && id !== null) navigate(`/autor/${id}`);
  };

  return (
    <button className="autor libroBtn" onClick={handleClick} type="button">
      <div className="libroPortada">
        <img src={src} alt={`Foto de ${nombre}`} />
      </div>
      <div className="libroInfo">
        <h4 className="libroTitulo">{nombre}</h4>
      </div>
    </button>
  );
}
