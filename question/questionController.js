var Question = require('./questionSchema');

exports.getAllQuestions = function(req, res){
    Question.find(function(err, questions) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.statusCode= 200;
        res.json(questions);
    });
};

exports.getQuestion = function(req, res){
    Question.find({ "question": req.params.question_string }, function(err, questions) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.json(questions);
    });

};

exports.putQuestion = function(req, res){
    console.log("You put some pattern");
};

exports.getAllPatternQuestions = function(req, res){
    Question.find({"questionType" : "Pattern"}, function(err, questions) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.statusCode = 200;
        res.json(questions);
    });
};

exports.getAllAntiPatternQuestions = function(req, res){
    Question.find({"questionType" : "Anti-Pattern"}, function(err, questions) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.statusCode = 200;
        res.json(questions);
    });
};
