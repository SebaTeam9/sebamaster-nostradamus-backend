module.exports = questionRoutes;

function questionRoutes(passport) {

    var questionController = require('./questionController');
    var router = require('express').Router();
    var unless = require('express-unless');

    /*
    * Routes Required
    * 1) Get All Questions
    * 2) Get A Question
    * 3) Get Pattern Questions
    * 4) Get Anti-Pattern Questions
    * */

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route("/questions")
        .get(questionController.getAllQuestions);

    router.route("/questions/byType/pattern")
        .get(questionController.getAllPatternQuestions);

    router.route("/questions/byType/anti-pattern")
        .get(questionController.getAllAntiPatternQuestions);

    router.route("/question/:question_string")
        .get(questionController.getQuestion)
        .put(questionController.putQuestion);

    return router;
}