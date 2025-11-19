import { useState } from "react";
import UsuarioService from "../services/usuario.services.js";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    contraseña: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    UsuarioService.create(form)
      .then(res => alert("Usuario creado"))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Crear usuario</h1>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" onChange={handleChange} />
        <input name="apellido" placeholder="Apellido" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="contraseña" type="password" placeholder="Contraseña" onChange={handleChange} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
