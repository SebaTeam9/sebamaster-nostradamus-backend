var Pattern = require('./patternSchema');

exports.getAllPatterns = function(req, res){
    Pattern.find(function(err, patterns) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.statusCode= 200;
        res.json(patterns);
    });
};

exports.getPatternById = function(req, res){
    Pattern.find({ "patternId": req.params.pattern_id }, function(err, pattern) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.json(pattern);
    });

};

exports.putPattern = function(req, res){
    console.log("You put some pattern");
};

exports.getPatternByName = function(req, res){
    Pattern.find({ "patternName": req.params.pattern_name}, function(err, pattern) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.statusCode = 200;
        res.json(pattern);
    });
};

exports.getPatternNameList = function(req,res) {
    Pattern.find({}, {'patternName': true},function(err, pattern) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(pattern);
    });
};