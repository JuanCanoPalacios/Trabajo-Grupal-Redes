const { Router } = require('express');
var express = require('express');
var router = express.Router();


const db = require('../models')
const Comentario = db.comentario

router.get('/', async function(req, res, next) {
    let comentario = await Comentario.findAll({
      include: {
        model: db.usuario
      }
    });
    res.send({
      status: true,
      response:[comentario]
    });
  });
  
  
  router.post('/', async function(req, res, next) {
    
    let comentario = req.body
    await Comentario.create(comentario)
    let comentarios = await Comentario.findAll()
  
    res.send({
      status: true,
      response:[comentarios]
    });
  });
  
  
  router.delete('/:id', async function(req, res, next) {
    let id = Number(req.params.id)
  
    try {
      let comentario = await Comentario.findByPk(id)
      await comentario.destroy()
      console.log("Se elimino")
      res.send({
        status: true,
        response: [comentario]
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
    let updateComentario= req.body
  
    try {
      let comentario = await Comentario.findByPk(id)
      comentario.update(updateComentario)
      await comentario.save()
    
      let comentarios = await Comentario.findAll()
      res.send({
        status: true,
        response: [comentarios]
      });
    } catch (error) {
      res.send({
        status: false,
        response: "No se pudo actualizar correctamente."
      })
    }
 })


module.exports = router;
