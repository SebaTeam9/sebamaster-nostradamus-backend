var mongoose = require('mongoose');
var optionsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});
var questionSchema = mongoose.Schema({
    questionId: {
        type: String,
        required: true,
        unique: true
    },
    question: {
        type: String,
        required: true,
        unique: true
    },
    questionTopLevelType: {
        type: String
    },
    questionType: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        required: true
    },
    questionOptions: [optionsSchema]
});

questionSchema.pre('save', function() {
    var pattern = this;
    console.log(pattern.patternName+" is being saved");
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;