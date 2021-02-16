let router = require('express').Router();

router.get('/', function(req, res) {
    res.json({
        status: 'Admin Api',
        message: 'Welcome to ADmin API'
    });
});


router.get('/fetch', function(req, res) {
    res.json({
        status: 'Fetch All Admin APIS',
        message: 'Fetching Data'
    });
});

module.exports = router
