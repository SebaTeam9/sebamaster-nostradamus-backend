/**
 * Created by Akash on 6/5/2016.
 */
var History = require('./historySchema');

// Create endpoint /api/dashboard for GET
exports.getHistory = function(req, res){

    History.find({ "username": req.params.username }, function(err, history) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.json(history);
    });
};
exports.postFeedback = function(req, res){
    console.log(req.body);
    var history = new History(req.body);

    history.save(function(err, h) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(h);
    });
};