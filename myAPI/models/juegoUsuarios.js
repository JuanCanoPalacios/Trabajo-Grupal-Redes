const { ServiceUnavailable } = require("http-errors")

module.exports = (sequelize, Sequelize) => {
    const JuegoUsuarios = sequelize.define('juegoUsuarios', {
        id_juego_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // id_usuario: {
        //     //     type: Sequelize.INTEGER,
        //     //     references: 'usuarios',
        //     //     referencesKey: 'id_usuario'
        //     // 
        // },
        // id_juego: {
        //     type: Sequelize.INTEGER,
        //     references: 'juegos',
        //     referencesKey: 'id_juego'
        // }
        clasificacion_usuario : {
            type: Sequelize.STRING
        },
        rol_de_juego: {
            type: Sequelize.STRING
        }
    })
    return JuegoUsuarios
}