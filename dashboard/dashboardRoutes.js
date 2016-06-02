/**
 * Created by Akash on 5/31/2016.
 */
module.exports = dashboardRoutes;

function dashboardRoutes(passport) {

    var dashboardController = require('./dashboardController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/dashboard')
        .get(dashboardController.getEntries);

    /*router.route('/movies/:movie_id')
        .get(movieController.getMovie)
        .put(movieController.putMovie)
        .delete(movieController.deleteMovie);*/

    return router;
}
