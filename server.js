var express = require("express");
var bodyParser = require('body-parser');
var pg = require('pg');

var app = express();

app.set('port', process.env.PORT || 5000)

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM salesforce.Speaker__c', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result); }
    });
  });
});

app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});

