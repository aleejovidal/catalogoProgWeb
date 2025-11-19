 module.exports = (sequelize, Sequelize) => {
  return sequelize.define("libros", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
         type: Sequelize.TEXT 
        },
    descripcion: {
         type: Sequelize.TEXT 
        },
    idAutor: {
      type: Sequelize.INTEGER,    
      allowNull: true,
      references: {
        model: "autor",           
        key: "id"
      }
    },
    genero: {
         type: Sequelize.TEXT 
        },
    imagen: {
        type: Sequelize.TEXT,
        allowNull: true
    }
       
  },
    { 
        timestamps: false

  }
);

};
