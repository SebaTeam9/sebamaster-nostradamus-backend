// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Movie   = new mongoose.Schema({
    //usecaseShortDesc: String,
    //usecaseLargeDesc: String,
    /*mpaa_rating: String,
    year: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }*/
});

// Export the Mongoose model
module.exports = mongoose.model('Dashboard', Movie);