import Libro from "./libro";
export default function Libros({listaLibros}) {
    return (
        <div className="listaLibros">
            {listaLibros.map((libro, index) => (
                <Libro 
                    key={index}
                    titulo={libro.titulo}
                    autor={libro.autor}
                    genero={libro.genero}
                    año={libro.año}
                    imagenLibro={libro.imagenLibro}
                />
            ))}
        </div>
    );
}