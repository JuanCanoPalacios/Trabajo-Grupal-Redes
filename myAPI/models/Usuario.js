const Empresa = require('./Empresa')

const table = 'usuario'

module.exports = (sequelize, Sequelize) => {

    const usuario = sequelize.define(table, {
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_usuario: {
            type: Sequelize.STRING
        },
        apellido_usuario: {
            type: Sequelize.STRING
        },
        apodo: {
            type: Sequelize.STRING
        },
        contraseña: {
            type: Sequelize.STRING
        },
        dni : {
            type: Sequelize.INTEGER
        },
        pais : {
            type: Sequelize.STRING
        },
        localidad: {
            type: Sequelize.STRING
        },
        telefono:{
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        // id_empresa: {
        //     type: Sequelize.INTEGER,
        //     references: 'empresa',
        //     referencesKey: 'id_empresa'
        // },
        descripcion: {
            type: Sequelize.STRING
        },
        imagen:{
            type: Sequelize.STRING
        }


    })
    // usuario.hasMany(Empresa)
    return usuario;
};