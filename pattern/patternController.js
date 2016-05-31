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
    var searchString = " { \"patternName\": /"+req.params.pattern_name+"/ }";
    Pattern.find(searchString, function(err, pattern) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.statusCode = 200;
        res.json(pattern);
    });
};
