const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  location: String,
  date: Date,
  temperature: Number,
  description: String,
  icon: String,
});

const WeatherModel = mongoose.model('Weather', weatherSchema);

module.exports = WeatherModel;