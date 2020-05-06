const express = require('express');
const router = express.Router();
const passport = require('passport');
const authCtrl = require('../controllers/auth.js');
// router.get('/register', authCtrl.getRegister);
router.post('/register',(req,res)=>{
   authCtrl.AuthController.register(req,res)
});
router.post('/login',(req,res,next)=>{
  authCtrl.AuthController.login(req,res,next)
});

router.get('/logout', authCtrl.getLogout)
module.exports = router;
