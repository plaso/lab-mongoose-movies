require('../config/db.config')
const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
const Casting = require('../models/Casting.model')

Promise.all([
  Celebrity.deleteMany()
])
  .then(() => {
    const celebrities = [
      {
        name: 'Di Caprio',
        occupation: 'actor',
        catchPhrase: 'I should have got into the boat'
      },
      {
        name: 'Fassbender',
        occupation: 'actor',
        catchPhrase: 'I am Ezzio Auditore'
      },
      {
        name: 'Ben Affleck',
        occupation: 'actor',
        catchPhrase: 'I am Batman'
      }
    ]

    return Celebrity.insertMany(celebrities)
  })
  .then((celebrities) => {
    celebrities.forEach(celebrity => console.log(`${celebrity.name} has been created`))

    const movies = [
      {
        title: 'Titanic',
        genre: 'Drama',
        plot: 'Lorem fistrum pupita ahorarr condemor jarl benemeritaar está la cosa muy malar la caidita de la pradera.'
      },
      {
        title: 'Assassins Creed',
        genre: 'Drama',
        plot: 'Lorem fistrum pupita ahorarr condemor jarl benemeritaar está la cosa muy malar la caidita de la pradera.'
      },
      {
        title: 'Batman',
        genre: 'Drama',
        plot: 'Lorem fistrum pupita ahorarr condemor jarl benemeritaar está la cosa muy malar la caidita de la pradera.'
      }
    ]

    return Movie.insertMany(movies)
      .then((movies) => {
        movies.forEach(movie => {
          console.log(`${movie.title} has been created`)
        })
    
        return Casting.insertMany(new Array(3).fill().map((_, i) => ({
          movie: movies[i].id,
          celebrity: celebrities[i].id
        })))
      })
  })
  .then((castings) => {
    castings.forEach((casting) => {
      console.log(`Casting created with movie id ${casting.movie} and celebrity id ${casting.celebrity}`)
    })
  })
  .catch(e => console.error(e))
  .finally(() => {
    mongoose.connection.close()
      .then(() => console.log('Succesfully disconnected from DB'))
      .catch((e) => console.error('Error disconnecting from DB', e))
      .finally(() => process.exit())
  })