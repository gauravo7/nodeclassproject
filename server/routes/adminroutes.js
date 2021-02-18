let router = require('express').Router();
var studentcontroller = require('../controllers/studentController')
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

router.get('/allstu',studentcontroller.allstu)
router.post('/addstu',studentcontroller.addstu)
router.post('/singlestu',studentcontroller.singlestu)


module.exports = router
