/**
 * Created by Akash on 6/5/2016.
 */
var mongoose = require('mongoose');

// Define the history schema
var Historys = mongoose.Schema({
    username:{
        type:String,
        required:true
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
        type: [String],
        required: true
    },
    resultRating: {
        type: Number
    },
    userFeedback: {
        type: String
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Historys', Historys);