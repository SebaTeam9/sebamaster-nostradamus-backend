/**
 * Created by Akash on 5/31/2016.
 */
var Dashboard = require('./dashboardSchema');

// Create endpoint /api/dashboard for GET
exports.getEntries = function(req, res){

    Dashboard.find(function(err, dashboard) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(dashboard);
    });
};

/*exports.postMovie = function(req, res) {

    var movie = new Movie(req.body);

    //do not allow user to fake identity. The user who postet the movie must be the same user that is logged in
    if (!req.user.equals(movie.user)) {
        res.sendStatus(401);
    }

    movie.save(function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.status(201).json(m);
    });
};

// Create endpoint /api/movies for GET
exports.getMovies = function(req, res) {
    Movie.find(function(err, movies) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(movies);
    });
};


// Create endpoint /api/movies/:movie_id for GET
exports.getMovie = function(req, res) {
    // Use the Beer model to find a specific beer
    Movie.findById(req.params.movie_id, function(err, movie) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(movie);
    });
};*/
