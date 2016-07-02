module.exports = suggestRoutes;

function suggestRoutes(passport) {

    var suggestController = require('./suggestController');
    var router = require('express').Router();
    var unless = require('express-unless');


    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware

    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route("/suggestPattern")
        .get(suggestController.getAllSuggested)
        .post(suggestController.postSuggested);

    return router;

}