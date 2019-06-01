var express = require('express');
var router = express.Router();
var mongoose = require('../public/javascripts/conntodb')

const LoginModel = mongoose.model('users', {
  username: String,
  password: String,
  tel: String,
  class: String,
  lesson: String
})
//登陆
router.post('/login', function(req, res, next) {
  LoginModel.find({username:req.body.username}).then((data)=>{
    if(data.length === 0){
      res.send({ret: -1});
    }else{
      if(data[0].password!== req.body.password){
        res.send({ret: 0})
      }else{
        res.send({ret: 1})
      }
    }
    res.end();
  })
});
//注册
router.post('/register', function(req, res, next) {
  LoginModel.find({username:req.body.username}).then((data)=>{
    if(data.length === 0){
      LoginModel.create(req.body, (err,doc)=>{
        console.log(doc,err);
        res.send({ret: 0, username: doc.username});
        res.end();
      })``
    }else{
      res.send({ret: 1});
      res.end();
    }
  })
});

module.exports = router;
