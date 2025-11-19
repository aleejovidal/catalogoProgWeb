module.exports = (sequelize, Sequelize) => {
  return sequelize.define("autor", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
         type: Sequelize.TEXT 
        },
    apellido: {
         type: Sequelize.TEXT 
        },
    nacimiento: {
         type: Sequelize.TEXT 
        },
    imagen: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    pais: {
        type: Sequelize.TEXT 
    }
       
  },
    { 
        timestamps: false,
        freezeTableName: true 

  }
);

};
