var express = require('express');
var router = express.Router();


const db = require('../models')
const Usuario = db.usuario


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let usuario = await Usuario.findAll();
  res.send({
    status: true,
    response:[usuario]
  });
});


router.post('/', async function(req, res, next) {
  
  let usuario = req.body
  let newUsuario = await Usuario.create(usuario)
  let usuarios = await Usuario.findAll()

  res.send({
    status: true,
    response:[usuarios]
  });
});


router.delete('/:id', async function(req, res, next) {
  let id = Number(req.params.id)
  let usuario = await Usuario.findByPk(id)
  await usuario.destroy()
  console.log("Se elimino")
  res.send({
    status: true,
    response: [usuario]
  });
});


router.put('/:id', async function(req, res, next) {
  let id = Number(req.params.id)
  let updateUser = req.body
  let usuario = await Usuario.findByPk(id)
  usuario.update(updateUser)
  await usuario.save()

  let usuarios = await Usuario.findAll()
  res.send({
    status: true,
    response: [usuarios]
  });
});

module.exports = router;
