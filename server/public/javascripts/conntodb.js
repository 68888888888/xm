const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bk1901', { useNewUrlParser: true }, (err)=>{
  if(err){
    console.log('连接失败')
  }else{
    console.log('连接成功')
  }
})

module.exports = mongoose;