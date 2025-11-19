const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Base de datos sincronizada.");
    }   
    )
    .catch((err) => {
        console.log("Error al sincronizar la base de datos: " + err.message);
    });
require("./routes/libros.routes.js")(app);
require("./routes/autor.routes.js")(app);
require("./routes/usuario.routes.js")(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
