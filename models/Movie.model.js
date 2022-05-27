//MONGOOSE
const mongoose = require('mongoose');


// SCHEMA
const movieSchema = new mongoose.Schema ({
  title: String,
    director: String,
    stars: [String],
    image: String,
    showtimes: [String],
})
//MODEL
const Movie = mongoose.model('Movie', movieSchema);
//EXPORT MODEL
module.exports = Movie;









