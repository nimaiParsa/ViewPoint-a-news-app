const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url).then(() => console.log('connected to db'))
}

module.exports = connectDB