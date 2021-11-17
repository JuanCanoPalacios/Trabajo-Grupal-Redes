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

db.empresa.hasMany(db.usuario,{
    foreignKey : 'id_empresa',
});
db.usuario.belongsTo(db.empresa,{
    foreignKey : 'id_empresa',
});


db.usuario.hasMany(db.comentario, {
    foreignKey: "id_usuario"
})
db.comentario.belongsTo(db.usuario, {
    foreignKey: 'id_usuario'
})


db.juegoUsuarios.hasMany(db.juegoUsuarios, {
    foreignKey: 'id_juego_usuario'
})
db.juegoUsuarios.belongsTo(db.usuario, {
    foreignKey: 'id_juego_usuario'
})

db.juegoUsuarios.hasMany(db.juegos, {
    foreignKey: 'id_juego_usuario'
})
db.juegos.belongsTo(db.juegoUsuarios, {
    foreignKey: 'id_juego_usuario'
})

module.exports = db