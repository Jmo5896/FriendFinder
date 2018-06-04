var express = require('express'); //npm install express
var bodyParser = require('body-parser'); //npm install body-parser
var path = require('path'); // npm install path

var app = express();
var PORT = process.env.PORT || 3360;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('listening on PORT ' + PORT);
});