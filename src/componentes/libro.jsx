import { useNavigate } from 'react-router-dom';

export default function Libro({ id, titulo, autor, genero, año, portada, imagenLibro }) {
    const navigate = useNavigate();
    const src = portada || imagenLibro || '';

    const handleClick = () => {
        if (id !== undefined && id !== null) navigate(`/libro/${id}`);
    };

    return (
        <button className="libro libroBtn" onClick={handleClick} type="button">
            <div className="libroPortada">
                <img src={src} alt={`Portada del libro ${titulo}`} />
            </div>
            <div className="libroInfo">
                <h4 className="libroTitulo">{titulo}</h4>
                {autor && <p className="libroAutor">{idAutor}</p>}
                {genero && <p className="libroGenero">{genero}</p>}
                {año && <p className="libroAnio">{año}</p>}
            </div>
        </button>
    );
}