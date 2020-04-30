const express = require('express');
const router = express.Router();
const passport = require('passport');
const authCtrl = require('../controllers/auth.js');

// router.get('/register', authCtrl.getRegister);
router.post('/register', authCtrl.postRegister);
router.post('/login',authCtrl.loginMiddleware);
router.get('/logout', authCtrl.getLogout)
module.exports = router;
