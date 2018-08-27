require('./mongooseConn.js');
var express = require('express');
var app = express();
var routes = require('./routes');


//middle ware
app.use(express.json());
// Cross Origin Resource Sharing (CORS)
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept-Encoding, Accept-Language');
    next();
});
app.use(routes);


// server started
const port = process.env.port || 3000
app.listen( port ,(err) => {
if(err) console.log('Failed to listen the server');
else console.log(`server started on port ${port} `);
});
