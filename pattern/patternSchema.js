var mongoose = require('mongoose');

var patternSchema = mongoose.Schema({
    patternId: {
        type: String,
        required: true,
        unique: true
    },
    patternName: {
        type: String,
        required: true
    },
    patternTopLevelType: {
        type: String,
        required: true
    },
    patternParentType:{
        type: String,
        required: true
    },
    patternContext: {
        type: String,
        required: true
    },
    patternProblem: {
        type: String,
        required: true
    },
    patternStructure: {
        type: String,
        required: true
    },
    patternRelated: {
        type: [String],
        required: true

    },
    patternURL: {
        type: String
    }
});

patternSchema.pre('save', function() {
    var pattern = this;
    console.log(pattern.patternName+" is being saved");
});

var Pattern = mongoose.model('Pattern', patternSchema);

module.exports = Pattern;