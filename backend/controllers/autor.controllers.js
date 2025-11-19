const db = require("../models");
const Autor = db.autor;
const Libros = db.libros;

exports.buscarTodos = (req, res) => {
  Autor.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.buscarUno = (req, res) => {
  const id = req.params.id;

  Autor.findByPk(id, {
    include: [{
      model: Libros,
      as: "libros",
      attributes: ["id", "titulo", "descripcion", "imagen", "genero"]
    }]
  })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};
exports.buscarPais = (req, res) => {
  const Pais = req.query.pais;

  Autor.findAll({ where: { pais: Pais } })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};
