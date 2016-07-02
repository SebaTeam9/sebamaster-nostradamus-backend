var mongoose = require('mongoose');

var suggestSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
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
    },
    suggestedDate: {
        type: Date
    },
    readStatus: {
        type: Boolean,
        default: false
    }
});

var Suggest = mongoose.model('Suggest', suggestSchema);

module.exports = Suggest;