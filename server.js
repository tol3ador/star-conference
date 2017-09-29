const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

var app = express();

app.set('port', process.env.PORT || 5000)

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/speakers', function(request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT full_name__c, picture_path__c, session__c FROM salesforce.Speaker__c', function(err, result) {
          done();
          if (err)
           { console.error(err); response.send("Error " + err); }
          else
           { response.send(result.rows); }
        });
      });
});


app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});

