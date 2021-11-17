var express = require('express');
var router = express.Router();


const db = require('../models')
const Juegos = db.juegos

router.get('/', async function(req, res, next) {
    let juegos = await Juegos.findAll();
    res.send({
      status: true,
      response:[juegos]
    });
  });
  
  
  router.post('/', async function(req, res, next) {
    
    let juego = req.body
    await Juegos.create(juego)
    let juegos = await Juegos.findAll()
  
    res.send({
      status: true,
      response:[juegos]
    });
  });
  
  
  router.delete('/:id', async function(req, res, next) {
    let id = Number(req.params.id)
  
    try {
      let juegos = await Juegos.findByPk(id)
      await juegos.destroy()
      console.log("Se elimino")
      res.send({
        status: true,
        response: [juegos]
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
    let updateJuego = req.body
  
    try {
      let juego = await Juegos.findByPk(id)
      juego.update(updateJuego)
      await juego.save()
    
      let juegos = await juego.findAll()
      res.send({
        status: true,
        response: [juegos]
      });
    } catch (error) {
      res.send({
        status: false,
        response: "No se pudo actualizar correctamente."
      })
    }
  })


module.exports = router