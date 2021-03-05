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
router.post('/address',studentcontroller.address)
router.post('/alladdress',studentcontroller.alladdress)
router.post('/deleteadd',studentcontroller.deleteadd)

router.post('/singlestu',studentcontroller.singlestu)
router.delete('/deletestu',studentcontroller.deletestu)
router.patch('/editstu',studentcontroller.editstu)
router.put('/editstu2',studentcontroller.editstu)

router.route('/singlestu/:stu_id')
        .get(studentcontroller.singlestunew)

module.exports = router
