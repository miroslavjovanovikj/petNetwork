const mongoose = require('mongoose');

const init =()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/blog',{useNewUrlParser: true})
}
module.exports={init}
