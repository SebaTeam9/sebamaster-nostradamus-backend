/**
 * Created by Akash on 6/5/2016.
 */
var History = require('./historySchema');

// Create endpoint /api/dashboard for GET
exports.getHistory = function(req, res){

    /*History.find(function(err, history) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(history);
    });*/
    History.find({ "username": req.params.username }, function(err, history) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.json(history);
    });
    /*History.findById(req.params.username, function(err, history) {
        if (err) {
            res.status(500).send(err)
            return;
        };
        console.log(history);
        res.json(history);
    });*/
};

exports.putUseCaseFeedback = function(req,res){

}