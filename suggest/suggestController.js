var Suggest = require('./suggestSchema');

exports.getAllSuggested = function(req, res){
    Suggest.
    find().
    sort({ suggestedDate: -1 }).
    exec(function(err, suggestions){
        if (err){
            console.log(errorForStack);
            res.status(500).send(err);
        }
        res.json(suggestions);
    });
};

exports.postSuggested = function(req, res){
    var suggest = new Suggest(req.body);

    suggest.save(function(err, s) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(s);
    });
};