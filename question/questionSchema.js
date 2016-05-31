var mongoose = require('mongoose');
var optionsSchema = mongoose.Schema({
    name: {
        type: String
    },
    value: {
        type: Number
    }
});
var questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    questionType: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        required: true
    },
    questionOptions: {
        type: [optionsSchema],
        required: true
    }
});

questionSchema.pre('save', function() {
    var pattern = this;
    console.log(pattern.patternName+" is being saved");
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;