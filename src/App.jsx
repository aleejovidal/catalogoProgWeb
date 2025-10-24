import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pantallas/inicio.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
