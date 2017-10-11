const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 5000)

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.get('/speakers', (request, response) => {
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
        client.query('SELECT sfid, name, name__c, image__c, session_title__c FROM salesforce.Speaker__c ORDER BY name__c ASC', (err, result) => {
            done();
            if (err) {
                console.error(err);
                response.send("Error " + err);
            } else {
                response.send(result.rows);
            }
        });
    });
});
app.get('/sessions', (request, response) => {
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
        client.query('SELECT id, name, time__c, duration__c, title__c, type__c, description__c, stars__c, speaker_name__c FROM salesforce.Session__c ORDER BY time__c ASC', (err, result) => {
            done();
            if (err) {
                console.error(err);
                response.send("Error "+ err);
            } else {
                response.send(result.rows);
            }
        });
    });
});
app.post('/rate', (request, response) =>{
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
        client.query(`UPDATE salesforce.Session__c SET stars__c = stars__c+1 WHERE id = ${request.body.id}`, (err, result) => {
            done();
            if (err) {
                console.error(err);
                response.send("Error "+ err);
            }else{
                response.send("OK");
            }
        });
    });
});
app.post('/feedback', (request, response) =>{
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
        client.query(`INSERT INTO salesforce.Session_Feedback__c (Speaker__c, Expectations__c, Readiness__c, Understandable__c, Method__c, Additional_Feedback__c)
                        VALUES (
                                '${request.body.speaker}',
                                '${request.body.expectation}',
                                '${request.body.readiness}',
                                '${request.body.understandable}',
                                '${request.body.method}',
                                '${request.body.feedback}'
                            )`, 
            (err, result) => {
            done();
            if (err) {
                console.error(err);
                response.send("Error "+ err);
            } else {
                response.send("OK");
            }
        });
    });
});

app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});