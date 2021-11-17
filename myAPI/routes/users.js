var express = require('express');
var router = express.Router();
var cors = require('cors')
var app = express()

app.use(cors())


const db = require('../models')
const Usuario = db.usuario


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let usuario = await Usuario.findAll({
    include: {
      model: db.empresa
    }
  });
  res.send({
    status: true,
    response:[usuario]
  });
});


router.get('/login', async function(req,res,next){
  try{
    var user = await Usuario.findAll({
      where: {
        apodo: "Franquito",
        contraseña: "soyfranco"
      }
    })
  }
  catch{
    res.send({
      status:false,
      response: "Usuario no encontrado"
    })
    return
  }
  res.send({
    status: "true",
    response: user
  })
})


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

  try {
    let usuario = await Usuario.findByPk(id)
    await usuario.destroy()
    console.log("Se elimino")
    res.send({
      status: true,
      response: [usuario]
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
  let updateUser = req.body

  try {
    let usuario = await Usuario.findByPk(id)
    usuario.update(updateUser)
    await usuario.save()
  
    let usuarios = await Usuario.findAll()
    res.send({
      status: true,
      response: [usuarios]
    });
  } catch (error) {
    res.send({
      status: false,
      response: "No se pudo actualizar correctamente."
    })
  }

});

module.exports = router;
