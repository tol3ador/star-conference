const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');

var app = express();

app.set('port', process.env.PORT || 5000)

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.get('/speakers', (request, response) => {
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
        client.query('SELECT full_name__c, picture_path__c, session_title__c FROM salesforce.Speaker__c', (err, result) => {
            done();
            if (err){
                console.error(err);
                response.send("Error " + err);
            }else{
                response.send(result.rows);
            }
        });
    });
});

app.get('/sessions', (request, response) => {
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
        client.query('SELECT session_title__c, time__c FROM salesforce.Session__c', (err, result) => {
            done();
            if(err){
                console.error(err);
                reponse.send("Error "+ err);
            }else{
                response.send(result.rows);
            }
        });
    });
});


app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});

