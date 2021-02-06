const Celebrity = require("../models/Celebrity.model")
const Casting = require('../models/Casting.model')
const Movie = require('../models/Movie.model')

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .populate({
      path: 'castings',
      populate: {
        path: 'movie'
      }
    })
    .then((celebrities) => {
      res.send(celebrities)
    })
}