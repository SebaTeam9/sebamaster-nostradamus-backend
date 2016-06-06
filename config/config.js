var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.host = 'ds023373.mlab.com:23373';
Config.db.name = 'nostdb';

Config.db.user = 'nostadmin';
Config.db.pass = 'nostadmin';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 8080;

Config.auth.jwtSecret = "very secret secret";

module.exports = Config;