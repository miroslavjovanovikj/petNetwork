const express = require('express');
const bodyParser = require('body-parser')
const expressSession = require('express-session');
const localStategy= require('passport-local');
const passport = require('passport');
const cors = require('cors');
const db = require('./db')
const User = require('./models/user')
const app = express();

app.use(bodyParser.json());
app.use(cors());
db.init();

app.use((req,res, next)=>{
  res.locals.currentUser= req.user;
  next();
})
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

app.use(expressSession({
  secret:"Tuka ima tuka nema gdee topceto",
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(blogRoutes)
app.use(authRoutes)

app.listen(27017, ()=>{
  console.log("Server is started")
})
