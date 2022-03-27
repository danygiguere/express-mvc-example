exports.app = function(req, res, next) {
    console.log('middleware for entire app');
    next();
};

exports.encryptCookies = function(req, res, next) {
    console.log('encryptCookies');
    next();
};

exports.verifyCsrfToken = function(req, res, next) {
    console.log('verifyCsrfToken');
    next();
};