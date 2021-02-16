let router = require('express').Router();

router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});


router.get('/fetch', function(req, res) {
    res.json({
        status: 'Fetch API Works',
        message: 'Fetching Data'
    });
});

module.exports = router
