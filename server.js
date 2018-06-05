// required npm's
var express = require('express'); //npm install express
var bodyParser = require('body-parser'); //npm install body-parser
var path = require('path'); // npm install path

//port number & express setup
var app = express();
var PORT = process.env.PORT || 3360;

//body-parser set-up
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routing links
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


//server set-up
app.listen(PORT, function() {
    console.log('listening on PORT ' + PORT);
});