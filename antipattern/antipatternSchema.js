/**
 * Created by Akash on 6/5/2016.
 */
var mongoose = require('mongoose');

// Define the history schema
var Antipatterns = mongoose.Schema({
    apcode :{
        type: Number
    },
    appriority :{
        type: Number
    },
    apparameter :{
        type: String
    },
    apname :{
        type: String
    },
    apstatement:{
        type: String
    },
    apcontext:{
        type: String
    },
    apsolution:{
        type: String
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Antipatterns', Antipatterns);