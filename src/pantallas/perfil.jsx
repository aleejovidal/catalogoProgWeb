
import '../App.css';
import Barra from '../componentes/navBar';
export default function Perfil() {
  const items = Array.from({ length: 5 });
  return (
    <div className="perfil">
      <Barra />
      <div className="perfilContainer">
        <aside className="perfilSide">
          <div className="perfilCard">
            <div className="perfilAvatar" />
            <div className="perfilIdentidad">
              <h3 className="perfilNombre">NOMBRE</h3>
              <p className="perfilRol">USUARIO</p>
            </div>
            <ul className="perfilDatos">
              <li><span className="perfilIcon" aria-hidden>🏠</span><span>Domicilio</span></li>
              <li><span className="perfilIcon" aria-hidden>📞</span><span>Num. de Teléfono</span></li>
              <li><span className="perfilIcon" aria-hidden>✉️</span><span>Email</span></li>
            </ul>
            <button type="button" className="perfilEditar">Editar</button>
          </div>
          <h4 className="perfilSubtitulo">Libros encargados</h4>
        </aside>
        <main className="perfilMain">
          <div className="perfilTabsHeader">
            <div>Favoritos (##)</div>
            <div>Finalizados (##)</div>
            <div>En emisión (##)</div>
          </div>
          <div className="perfilColumns">
            {[0,1,2].map((col) => (
              <section className="perfilCol" key={col}>
                <ul className="perfilLista">
                  {items.map((_, i) => (
                    <li key={`${col}-${i}`}>
                      <span className="punto" aria-hidden>•</span>
                      <div className="perfilItem">
                        <p className="perfilLibroNombre">Nombre libro</p>
                        <p className="perfilLibroAutor">Nombre autor</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};