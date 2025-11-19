import Autor from './autor';

export default function Autores({ listaAutores = [], horizontal = false, className = '' }) {
  const classes = `listaLibros${horizontal ? ' horizontal' : ''} ${className}`.trim();
  return (
    <div className={classes}>
      {listaAutores.map((a, idx) => (
        <Autor key={a.id ?? idx} id={a.id} nombre={a.nombre} foto={a.foto} />
      ))}
    </div>
  );
}
