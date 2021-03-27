
let express = require('express')
let bodyParser = require('body-parser');


let app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => res.send('Welcome to Express'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

require('./config/db')

let apiroutes = require('./routes/routes');
let adminroutes = require('./routes/adminroutes');


app.use('/admin',adminroutes)
app.use('/',apiroutes)


app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})