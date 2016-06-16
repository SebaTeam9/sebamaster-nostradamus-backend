/**
 * Created by Akash on 6/5/2016.
 */
module.exports = antipatternRoutes;

function antipatternRoutes(passport) {

    var antipatternController = require('./antipatternController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/antipatterns')
        .get(antipatternController.getAntipatterns);

    return router;
}