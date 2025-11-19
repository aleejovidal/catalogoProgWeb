module.exports = app => {
  const autor = require("../controllers/autor.controllers.js");
  const router = require("express").Router();

  router.get("/pais", autor.buscarPais);
  router.get("/:id", autor.buscarUno);
  router.get("/", autor.buscarTodos);

  app.use("/api/autor", router);
};
