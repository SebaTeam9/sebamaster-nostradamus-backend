/**
 * Created by Akash on 6/5/2016.
 */
var mongoose = require('mongoose');

// Define the history schema
var Historys = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userStoryName: {
        type: String,
        required: true
    },
    userStoryDesc: {
        type: String,
        required: true
    },
    analysisDate: {
        type: Date,
        required: true
    },
    analysisResult: {
        type: String,
        required: true
    },
    resultRating: {
        type: Number,
        required: true
    },
    userFeedback: {
        type: String,
        required: true
    }
});


// Export the Mongoose model
module.exports = mongoose.model('Historys', Historys);