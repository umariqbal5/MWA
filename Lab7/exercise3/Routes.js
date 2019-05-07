const express = require('express');
const Document = require('./Document')
const router = express.Router();
const {db} = require('./DB');
const {controller} = require('./controller');



//GetAll
router.get('/lectures',(req,res)=> controller.getAll(req, res));

//Find
router.get('/lectures/:id',(req,res)=> controller.find(req, res));

//FindOne
router.get('/lecture/:id', (req,res)=> controller.findOne(req, res));

//Find by lecture name
router.post('/search/:q',(req,res) => controller.search(req,res));

//Insert Doc
router.post('/lectures',(req,res) => controller.addLecture(req,res));

module.exports.router = router;