const mongoose = require('mongoose')

const castingSchema = mongoose.Schema({
  movie: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Movie',
    required: true
  },
  celebrity: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Celebrity',
    required: true
  }
})

const Casting = mongoose.model('Casting', castingSchema)

module.exports = Casting