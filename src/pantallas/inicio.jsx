import React, { useMemo } from 'react';
import Libros from '../componentes/libros';
import Barra from '../componentes/navBar';

export default function Inicio() {
    const recientes = useMemo(() => (
        [1,2,3,4].map((i) => ({
            titulo: `Titulo ${i}`,
            autor: '',
            genero: '',
            año: '',
            imagenLibro: ''
        }))
    ), []);

    const tendencia = useMemo(() => (
        [1,2,3,4,5].map((i) => ({
            titulo: `Titulo ${i}`,
            autor: '',
            genero: '',
            año: '',
            imagenLibro: ''
        }))
    ), []);

    const argentina = useMemo(() => (
        [1,2,3,4,5].map((i) => ({
            titulo: `Titulo ${i}`,
            autor: '',
            genero: '',
            año: '',
            imagenLibro: ''
        }))
    ), []);

    return (
        <div className="inicio">
            <Barra />
            <div className="inicioContenido">
                <aside className='perfilInicio'>
                    <div className='perfilUsuario'>
                        <div className='avatarUsuario' />
                        <div className='datosUsuario'>
                            <h3 className='nombreUsuario'>NOMBRE</h3>
                            <p className='rolUsuario'>USUARIO</p>
                        </div>
                    </div>
                    <h4 className='tituloSeccion'>Tus leidos recientes</h4>
                    <div className='librosRecientes'>
                        <Libros listaLibros={recientes} />
                    </div>
                </aside>
                <main className='recomendaciones'>
                    <div className='buscadorInicio'>
                        <input className='inputBusqueda' placeholder='Buscar libros, autores...' />
                    </div>
                    <h2 className="tituloPrincipal">Recomendaciones</h2>
                    <div className="listaRecomendaciones">
                        <section className="bloqueRecs">
                            <h3>Libros en tendencia</h3>
                            <Libros listaLibros={tendencia} />
                        </section>
                        <section className="bloqueRecs">
                            <h3>Literatura argentina</h3>
                            <Libros listaLibros={argentina} />
                        </section>
                    </div>
                </main>
                <aside className='sidebarLibros'>
                    <div class="sidebarLibro">
                        <div class="autoresSidebar">
                            <img src="imagenes/borges.jpg" alt="Imagen 1" class="autorSidebar" />
                            <img src="imagenes/deBeauvoir.jpg" alt="Imagen 2" class="autorSidebar" />
                            <img src="imagenes/dostoevsky.jpg" alt="Imagen 3" class="autorSidebar" />
                        </div>
                    </div>
                </aside>
                
            </div>
        </div>
    )
}