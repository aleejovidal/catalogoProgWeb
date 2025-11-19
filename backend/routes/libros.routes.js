module.exports = app => {
  const libros = require("../controllers/libros.controllers.js");
  const autor = require("../controllers/autor.controllers.js");
  const router = require("express").Router();

  router.get("/", libros.buscarTodos);
  router.get("/:id", libros.buscarUno);
  router.put("/:id", libros.actualizar);


  app.use("/api/libros", router);
};

