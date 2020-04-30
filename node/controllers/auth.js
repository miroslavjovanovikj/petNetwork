const passport = require('passport');
const localStrategy = require('passport-local');
const expressSession = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');
const bodyParser = require('body-parser');
const User = require('../models/user');

// const getRegister = (req,res) => {
//   res.send("registe")
// }
const postRegister =(req,res)=>{
  const newUser = new User({username:req.body.username, email:req.body.email});
  User.register(newUser, req.body.password, (err, user)=>{
    if(err){
      console.log(err)
      return res.send('register')
    }
    passport.authenticate("local")(req,res, ()=>{
      res.redirect("/")
    })
  })
}

const loginMiddleware = passport.authenticate('local', {
  successRedirect:'/blog',
  failureRedirect:'/login'
})

const getLogout = (req,res)=>{
  req.logout();
  res.redirect("/")
}
const isLoggedIn = (req,res,next) =>{
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect('/logout')
}
module.exports= {
  postRegister,
  loginMiddleware,
  getLogout,
  isLoggedIn

}
