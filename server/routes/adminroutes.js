let router = require('express').Router();
var multer  = require('multer')
var path = require('path')
var studentcontroller = require('../controllers/studentController')
var teachercontroller = require('../controllers/teacherController')
router.get('/', function(req, res) {
    res.json({
        status: 'Admin Api',
        message: 'Welcome to ADmin API'
    });
});
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'server/public/teacher/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
var upload = multer({ storage: storage })

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
router.post('/updateadd',studentcontroller.updateadd)

router.post('/singlestu',studentcontroller.singlestu)
router.delete('/deletestu',studentcontroller.deletestu)
router.patch('/editstu',studentcontroller.editstu)
router.put('/editstu2',studentcontroller.editstu)

router.route('/singlestu/:stu_id')
        .get(studentcontroller.singlestunew)

router.post('/addtech',upload.single('pic'),teachercontroller.addteacher)
router.post('/alltec',teachercontroller.alltech)
router.post('/login',teachercontroller.login)
module.exports = router
