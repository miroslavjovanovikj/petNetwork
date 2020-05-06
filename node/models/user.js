const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    rquired:true
  },
  password:{
    type:String,
    rquired:true
  }
})
userSchema.plugin(passportLocalMongoose);
module.exports =mongoose.model('User', userSchema);
