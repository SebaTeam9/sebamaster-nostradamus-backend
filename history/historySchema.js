/**
 * Created by Akash on 6/5/2016.
 */
var mongoose = require('mongoose');

// Define the history schema
var Historys   = new mongoose.Schema({
});

// Export the Mongoose model
module.exports = mongoose.model('Historys', Historys);