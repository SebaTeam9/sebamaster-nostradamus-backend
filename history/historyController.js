/**
 * Created by Akash on 6/5/2016.
 */
var History = require('./historySchema');

// Create endpoint /api/dashboard for GET
exports.getHistory = function(req, res){

    History.find({ "username": req.params.username })
        .sort({analysisResult:-1})
        .exec(function(err, history) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.json(history);
        });
};
exports.getAllHistory = function(req, res){
    History.find({}, {'analysisResult': true,'resultRating': true},function(err, history) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(history);
    });
};

exports.postFeedback = function(req, res){
    var history = new History(req.body);

    history.save(function(err, h) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(h);
    });
};

exports.putFeedback = function(req, res){
    var id = req.body._id;
    History.find(id, function(err, p) {
        if (!p)
            console.log(new Error('Could not load Document'));
        else {
            var update = {
                resultRating : req.body.resultRating,
                userFeedback : req.body.userFeedback
            };

            var query = {'_id':id};
            History.findOneAndUpdate(query, update, function(err) { // 5
                if(err) {
                    return res.send(500, err);
                }

            });
        }
    });
};

exports.getValidFeedbacks = function(req,res){
    History.
    find({ "userFeedback": { $ne: null }}).
    sort({ patternCreation: -1 }).
    exec(function(err, patterns){
        if (err){
            console.log(errorForStack);
            res.status(500).send(err);
        }
        res.json(patterns);
    });
};
