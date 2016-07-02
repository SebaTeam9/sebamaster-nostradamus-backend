var mongoose = require('mongoose');

var suggestSchema = mongoose.Schema({
    suggestedType: {
        type: String,
        required: true
    },
    suggestName: {
        type: String,
        required: true
    },
    suggestedDescription: {
        type: String,
        required: true
    },
    suggestedURL: {
        type: String
    }
});

var Suggest = mongoose.model('Suggest', suggestSchema);

module.exports = Suggest;