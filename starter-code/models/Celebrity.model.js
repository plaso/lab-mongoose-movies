const mongoose = require('mongoose')

const celebritySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    },
    catchPhrase: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

celebritySchema.virtual('castings', {
  ref: 'Casting',
  foreignField: 'celebrity',
  localField: '_id'
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity