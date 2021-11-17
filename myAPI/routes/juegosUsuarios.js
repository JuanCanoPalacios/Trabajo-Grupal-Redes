var express = require('express');
var router = express.Router();


const db = require('../models')
const JuegosUsuarios = db.juegoUsuarios

router.get('/', async function(req, res, next) {
    let juegosUsuarios = await JuegosUsuarios.findAll();
    res.send({
      status: true,
      response:[juegosUsuarios]
    });
  });
  
  
  router.post('/', async function(req, res, next) {
    
    let juegoUsuario = req.body
    let newjuegoUsuario = await JuegosUsuarios.create(juegoUsuario)
    let juegoUsuarios = await JuegosUsuarios.findAll()
  
    res.send({
      status: true,
      response:[juegoUsuarios]
    });
  });
  
  
  router.delete('/:id', async function(req, res, next) {
    let id = Number(req.params.id)
  
    try {
      let JuegosUsuario = await JuegosUsuario.findByPk(id)
      await JuegosUsuario.destroy()
      console.log("Se elimino")
      res.send({
        status: true,
        response: [JuegosUsuario]
      });
    } catch (error) {
      res.send({
        status: false,
        response: "No se pudo eliminar correctamente"
      })
    }
  
  });
  
  
  router.put('/:id', async function(req, res, next) {
    let id = Number(req.params.id)
    let updateJuegoUser = req.body
  
    try {
      let juegosUsuarios = await JuegosUsuarios.findByPk(id)
      juegosUsuarios.update(updateJuegoUser)
      await juegosUsuarios.save()
    
      let juegosUsuarioss = await JuegosUsuarios.findAll()
      res.send({
        status: true,
        response: [juegosUsuarioss]
      });
    } catch (error) {
      res.send({
        status: false,
        response: "No se pudo actualizar correctamente."
      })
    }
})

module.exports = router