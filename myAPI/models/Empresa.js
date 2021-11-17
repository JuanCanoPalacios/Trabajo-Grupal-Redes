module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define('empresa', {
        id_empresa : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_empresa : {
            type: Sequelize.STRING
        },
        descripcion : {
            type: Sequelize.STRING
        },
        imagen : {
            type: Sequelize.STRING
        }
    })
    return Empresa
}