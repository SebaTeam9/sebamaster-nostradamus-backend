/**
 * Created by Akash on 6/5/2016.
 */
module.exports = historyRoutes;

function historyRoutes(passport) {

    var historyController = require('./historyController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/history/:username')
        .get(historyController.getHistory);

    router.route('/allHistory')
        .get(historyController.getAllHistory);

    router.route('/validFeedbacks')
        .get(historyController.getValidFeedbacks);

    return router;
}