var express = require('express');
var router = express.Router();


const db = require('../models')
const Empresa = db.empresa

router.get('/', async function(req, res, next) {
    let empresa = await Empresa.findAll();
    res.send({
        status: true,
      response:[empresa]
    });
});


router.post('/', async function(req, res, next) {
  
    let empresa = req.body
    await Empresa.create(empresa)
    let empresas = await Empresa.findAll()
  
    res.send({
      status: true,
      response:[empresas]
    });
  });
  
  
  router.delete('/:id', async function(req, res, next) {
    let id = Number(req.params.id)
    try {
      let empresa = await Empresa.findByPk(id)
      await empresa.destroy()
      res.send({
        status: true,
        response: [empresa]
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
    let updateEmpresa = req.body
    try {
      let empresa = await Empresa.findByPk(id)
      empresa.update(updateEmpresa)
      await empresa.save()
      let empresas = await Empresa.findAll()
      res.send({
        status: true,
        response: [empresas]
      });
    } catch (error) {
      res.send({
        status: false,
        response: "No se pudo actualizar correctamente."
      })
    }
  });



module.exports = router