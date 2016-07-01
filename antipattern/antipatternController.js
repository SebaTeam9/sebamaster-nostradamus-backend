/**
 * Created by Akash on 6/5/2016.
 */
var Antipatterns = require('./antipatternSchema');

exports.getAntipatterns = function(req, res) {
    Antipatterns.find(function(err, antipatterns) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(antipatterns);
    });
};

exports.getAntipatternNameList = function(req,res) {
    Antipatterns.find({}, {'apname': true},function(err, antipatterns) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(antipatterns);
    });
};

exports.getAntiPatternByName = function(req, res){
    Antipatterns.find({ "apname": req.params.ap_name }, function(err, antipatterns) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.statusCode = 200;
        res.json(antipatterns);
    });
};
