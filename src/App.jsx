import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pantallas/inicio.jsx'
import Catalogo from './pantallas/catalogo.jsx'
import LibroDetalle from './pantallas/libroDetalle.jsx'
import AutoresPantalla from './pantallas/autores.jsx'
import Perfil from './pantallas/perfil.jsx'
import ListaLibros from './componentes/listaLibros.jsx'
import Autores from './pantallas/autores.jsx'
import AutorDetalle from './pantallas/autorDetalle.jsx'
import Registro from './pantallas/registro.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/libro/:id" element={<LibroDetalle />} />
          <Route path="/autores" element={<AutoresPantalla />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/catalogo/:categoria" element={<ListaLibros/>} />
          <Route path="/autores" element={<Autores />} />
          <Route path="/autor/:id" element={<AutorDetalle/>} />
          <Route path='/libro/:id' element={<LibroDetalle/>} />
          <Route path='/registro' element={<Registro/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
