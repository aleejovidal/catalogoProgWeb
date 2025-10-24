import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Barra() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    
    useEffect(() => {
        const datosUsuario = localStorage.getItem("usuario");
        if (datosUsuario) {
            setUsuario(JSON.parse(datosUsuario));
        }
    }, []);
    
    const categorias = () => {
        return (
            <div className="categoriasNavBar">
                <button className="botonNavBar" onClick={() => navigate('/inicio')}> Inicio </button>
                <button className="botonNavBar" onClick={() => navigate('/catalogo')}> Catalogo </button>
                <button className="botonNavBar" onClick={() => navigate('/autores')}> Autores </button>
                <button className="botonNavBar" onClick={() => navigate('/perfil')}> Perfil </button>
            </div>
        )
    };
    
    return ( 
        <div className="navBar">
            <div className="imagenNavBar">
            </div>
            <div className="pantallasNavBar">
                {categorias()}
            </div>
        </div>
    )
}