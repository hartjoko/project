var express = require ('express')
var router = express.Router();
var User = require('../models/mahasiswa');

//router mengembalikan 2 parameter
//pertama request = req
//kedua respons = res

router.get('/insert', function (req, res){
  User
    .find({})
    .exec(function (err, mahasiswa){
      res.render('insert', {data: mahasiswa})
    })
})

router.post('/insert', function (req, res){
  var name= req.body.name
  var age= req.body.age

  var newUser = new User ({
    name: name,
    age: age,
  })

newUser.save(function(err, saveUser){
    var userId = saveUser._id
    res.redirect('/mahasiswa/insert')
  })
})

module.exports = router;
