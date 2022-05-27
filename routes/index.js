const express = require('express');
const { all } = require('express/lib/application');
const { Mongoose } = require('mongoose');
const Movie = require('../models/Movie.model');
const router = express.Router();

require("../db");
const MovieModel =require ("../models/Movie.model");




/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//THIS IS THE FILE
// router.get('/movies', (req, res, next) => res.render('movies'));

//ALL THE MOVIES
router.get('/movies', (req, res, next) => {
MovieModel.find()
.then((allmovies) => {
res.render('movies', {allmovies})
console.log(allmovies);
}) 
});

module.exports = router;
