const db = require("../models");
const usuario = db.usuario;
const libros = db.libros;
const autor = db.autor;

exports.buscarTodos = (req, res) => {
  usuario.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.buscarUno = (req, res) => {
  const id = req.params.id;

  usuario.findByPk(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};
exports.crear = (req, res) => {
    usuario.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};