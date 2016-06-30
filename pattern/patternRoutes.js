module.exports = patternRoutes;

function patternRoutes(passport) {

    var patternController = require('./patternController');
    var router = require('express').Router();
    var unless = require('express-unless');

    /*
    * Routes Required
    * 1) Get All Patterns
    * 2) Get Pattern By Id
    * 3) Get Pattern By Name
    * */

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route("/patterns")
        .get(patternController.getAllPatterns);

    router.route("/pattern/byId/:pattern_id")
        .get(patternController.getPatternById)
        .put(patternController.putPattern);

    router.route("/pattern/byName/:pattern_name")
        .get(patternController.getPatternByName);

    router.route("/patternnamelist")
        .get(patternController.getPatternNameList);

    return router;

}