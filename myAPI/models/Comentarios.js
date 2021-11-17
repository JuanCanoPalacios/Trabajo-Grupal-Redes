module.exports = (sequelize, Sequelize) => {
    const Comentarios = sequelize.define('comentarios', {
        id_comentario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
                type: Sequelize.INTEGER
        },
        fecha: {
            type: Sequelize.DATE
        }
    })
    return Comentarios
}