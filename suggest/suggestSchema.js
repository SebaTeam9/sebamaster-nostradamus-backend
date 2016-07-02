var mongoose = require('mongoose');

var suggestSchema = mongoose.Schema({
    suggestedType: {
        type: String,
        required: true,
        unique: true
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

var Suggest = mongoose.model('Suggests', suggestSchema);

module.exports = Suggest;