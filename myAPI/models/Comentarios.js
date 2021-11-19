module.exports = (sequelize, Sequelize) => {
    const Comentarios = sequelize.define('comentarios', {
        id_comentario: {
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
        fecha: {
            type: Sequelize.DATE
        }
    })
    return Comentarios
}