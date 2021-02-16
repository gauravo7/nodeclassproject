
let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');


let app = express();

var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Welcome to Express'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


let apiroutes = require('./routes');
let adminroutes = require('./adminroutes');


app.use('/admin',adminroutes)
app.use('/',apiroutes)

const dbPath = 'mongodb://localhost/project';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})

app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})