const { ServiceUnavailable } = require("http-errors")

module.exports = (sequelize,Sequelize) => {
    const Juegos = sequelize.define('juegos', {
        id_juego : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_juego : {
            type: Sequelize.STRING
        },
        tematica : {
            type: Sequelize.STRING
        },
        imagen : {
            type: Sequelize.STRING
        }
    })
    return Juegos
}