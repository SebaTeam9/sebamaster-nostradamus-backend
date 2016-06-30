/**
 * Created by Akash on 6/5/2016.
 */
var Antipatterns = require('./antipatternSchema');

// Create endpoint /api/history for GET
    exports.getAntipatterns = function(req, res) {
        Antipatterns.find(function(err, antipatterns) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(antipatterns);
        });
    };

exports.putUseCaseFeedback = function(req,res){

}