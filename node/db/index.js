const mongoose = require('mongoose');

const init =()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/mojabbb', {useUnifiedTopology:true})
}
module.exports={init}
