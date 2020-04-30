const mongoose = require('mongoose');

const init =()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/newBlog')
}
module.exports={init}
