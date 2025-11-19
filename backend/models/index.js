const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  }
);


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// MODELOS
db.libros = require("./libros.model.js")(sequelize, Sequelize);
db.autor = require("./autor.model.js")(sequelize, Sequelize);
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);

// RELACIONES
db.autor.hasMany(db.libros, {
  foreignKey: "idAutor",
  as: "libros"
});

db.libros.belongsTo(db.autor, {
  foreignKey: "idAutor",
  as: "autor"
});

module.exports = db;
