var Question = require('./questionSchema');

exports.getAllQuestions = function(req, res){
    Question.find(function(err, questions) {
        if (err) {
            res.status(500).send(err);
            return;
        }
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

exports.getQuestionsByPhaseId = function(req, res){
    Question.find({ "questionPhase": req.params.phaseId }, function(err, questions) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.json(questions);
    });

};

exports.getQuestionsByPatternType = function(req, res){
    Question.find({ "questionTopLevelType": req.params.patternType }, function(err, questions) {
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
        else if(questions === null){
            res.status(204).end();
        }
        res.json(questions);
    });
};
