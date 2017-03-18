var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const massive = require('massive');

var connectionString = "postgres://thad@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString})

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);
var controller = require('./controller.js');

var db = app.get('db');

controller.getPlanes();


app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });
// db.get_planes(function(err, planes){
//     console.log(err, planes)
// })
