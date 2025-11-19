import Libro from "./libro";

export default function Libros({ listaLibros = [], horizontal = false, className = "" }) {
    const classes = `listaLibros${horizontal ? ' horizontal' : ''} ${className}`.trim();
    return (
        <div className={classes}>
            {listaLibros.map((libro, index) => (
                <Libro
                    id={libro.id}
                    titulo={libro.titulo}
                    autor={libro.autor}
                    genero={libro.genero}
                    imagen={libro.imagen}
                />
            ))}
        </div>
    );
}