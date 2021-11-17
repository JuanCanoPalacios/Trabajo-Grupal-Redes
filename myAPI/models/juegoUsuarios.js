const { ServiceUnavailable } = require("http-errors")

module.exports = (sequelize, Sequelize) => {
    const JuegoUsuarios = sequelize.define('juego_Usuarios', {
        id_juego_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
                type: Sequelize.INTEGER,
            
        },
        id_juego: {
            type: Sequelize.INTEGER,
        },
        clasificacion_usuario : {
            type: Sequelize.STRING
        },
        rol_de_juego: {
            type: Sequelize.STRING
        }
    })
    return JuegoUsuarios
}