const Sequelize = require("sequelize");
const dbConfig = require("../config/config.js");

const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        port: dbConfig.port
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./Usuario")(sequelize, Sequelize);
db.comentario = require("./Comentarios")(sequelize, Sequelize);
db.empresa = require("./Empresa")(sequelize, Sequelize);
db.juegos = require("./Juegos")(sequelize, Sequelize);
db.juegoUsuarios = require("./juegoUsuarios")(sequelize, Sequelize);



module.exports = db