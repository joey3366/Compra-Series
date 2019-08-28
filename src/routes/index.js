const express = require('express');
const router = express.Router();
const home = require('../controllers/home');
module.exports = app => {

    router.get('/',(req, res) =>{

        res.render('index');
    });
    
    router.get('/singup',(req, res, next) =>{

        res.render('singup');
    });

    router.get('/login',(req, res, next) =>{

        res.render('login');
    });
    
    router.get('/', home.index);
    app.use(router);
};