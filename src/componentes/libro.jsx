export default function Libro (titulo, autor, genero, año, imagenLibro) {
    return (
        <div className="libro">
            <img src={imagenLibro} alt={`Portada del libro ${titulo}`} />
            <h2>{titulo}</h2>
            <h3>{autor}</h3>
            <p>{genero}</p>
            <p>{año}</p>
        </div>
    );
}