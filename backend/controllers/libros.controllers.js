const db = require("../models");
const libros = db.libros;
const autor = db.autor;

exports.buscarTodos = (req, res) => {
  libros.findAll({
    include: [{
      model: autor,
      as: "autor",
      attributes: ["id", "nombre", "apellido", "imagen"]
     }]
  })
  
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.buscarUno = (req, res) => {
  const id = req.params.id;

  libros.findByPk(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.actualizar = (req, res) => {
  const id = req.params.id;

  libros.update(req.body, { where: { id: id } })
    .then(() => res.send({ message: "Actualizado" }))
    .catch(err => res.status(500).send({ message: err.message }));
};
exports.buscarApellido = (req, res) => {
  const apellido = req.query.apellido;

  libros.findAll({
     where: { apellido: apellido },
      include: [{
        model: Autor,
        as: "autor",
        attributes: ["id", "nombre", "apellido", "imagen"]
       }]
   })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};