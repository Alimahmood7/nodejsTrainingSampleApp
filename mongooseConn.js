
var mongoose = require ('mongoose');
var config = require ('./config');
var dburl = config.DB_URL;

mongoose.connect(dburl);
mongoose.connection.on('connected', function() {
  console.log('Mongoose database connected to ' + dburl);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose database connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose database disconnected');
});

require('./models');