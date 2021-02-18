
let express = require('express')
let bodyParser = require('body-parser');


let app = express();

var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Welcome to Express'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

require('./server/config/db')

let apiroutes = require('./server/routes/routes');
let adminroutes = require('./server/routes/adminroutes');


app.use('/admin',adminroutes)
app.use('/',apiroutes)


app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})