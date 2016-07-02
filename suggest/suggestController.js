var Suggest = require('./suggestSchema');

exports.getAllSuggested = function(req, res){
    Suggest.find(function(err, suggested) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.statusCode= 200;
        res.json(suggested);
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