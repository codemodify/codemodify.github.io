var express = require('express');
var app = express();
app.configure(function () {
    app.use( "/", express.static(__dirname) );
});
app.listen( process.env.PORT ); //the port you want to use