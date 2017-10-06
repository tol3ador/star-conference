const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');

const app = express();

const DEVELOPMENT = process.env.NODE_ENV != 'production';

app.set('port', process.env.PORT || 5000)

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});



if(DEVELOPMENT){
    app.post('/rate', (request, response) => {
        response.send("Mock: Rating OK!");
    });

    app.post('/feedback', (request, response) => {
        response.send("Mock: Feedback OK!");
    });

    app.get('/speakers', (request, response)=>{
        response.send([{"name":"SP-013","name__c":"Ivana Tešanović","image__c":null},{"name":"SP-014","name__c":"Milan Kosanović","image__c":null},{"name":"SP-015","name__c":"Milan Kosanović","image__c":null},{"name":"SP-016","name__c":"Miroljub Enjaković","image__c":null},{"name":"SP-017","name__c":"Miloš Davidović","image__c":null},{"name":"SP-018","name__c":"Nenad Maljugić","image__c":null},{"name":"SP-012","name__c":"Dejan Ostojić","image__c":null},{"name":"SP-019","name__c":"Ognjen Stanić","image__c":null}]);
    });

    app.get('/sessions', (request, response)=>{
        response.send([{"id":4,"name":"SE-013","time__c":"2017-11-04T18:00:00.000Z","duration__c":30,"title__c":"Authentication & Authorization - oAuth2 and Open ID Protocols","type__c":"Talk","description__c":null,"stars__c":11,"speakers__c":"a000Y00000InD8kQAF"},{"id":8,"name":"SE-017","time__c":"2017-11-04T16:30:00.000Z","duration__c":30,"title__c":"BDD & TDD kroz primere u C#","type__c":"Talk","description__c":null,"stars__c":10,"speakers__c":"a000Y00000InD9JQAV"},{"id":3,"name":"SE-012","time__c":"2017-11-04T09:15:00.000Z","duration__c":30,"title__c":"Visitor Pattern Explained","type__c":"Talk","description__c":null,"stars__c":28,"speakers__c":"a000Y00000InD8fQAF"},{"id":1,"name":"SE-010","time__c":"2017-11-04T09:30:00.000Z","duration__c":30,"title__c":"HTTP Caching","type__c":"Talk","description__c":null,"stars__c":23,"speakers__c":"a000Y00000InD8VQAV"},{"id":2,"name":"SE-011","time__c":"2017-11-04T10:30:00.000Z","duration__c":30,"title__c":"Angular 2 Fundamentals & Best practices","type__c":"Talk","description__c":null,"stars__c":22,"speakers__c":"a000Y00000InD8aQAF"},{"id":7,"name":"SE-016","time__c":"2017-11-04T12:30:00.000Z","duration__c":30,"title__c":"Umbraco - Tip & Tricks","type__c":"Talk","description__c":null,"stars__c":12,"speakers__c":"a000Y00000InD9EQAV"},{"id":5,"name":"SE-014","time__c":"2017-11-04T11:00:00.000Z","duration__c":30,"title__c":"MVC 5 – Custom model binding","type__c":"Talk","description__c":null,"stars__c":13,"speakers__c":"a000Y00000InD8zQAF"},{"id":6,"name":"SE-015","time__c":"2017-11-04T16:00:00.000Z","duration__c":30,"title__c":"Get Real(time) With Websockets","type__c":"Talk","description__c":null,"stars__c":11,"speakers__c":"a000Y00000InD94QAF"}]);
    });
}else{
    app.get('/speakers', (request, response) => {
        pg.connect(process.env.DATABASE_URL, (err, client, done) => {
            client.query('SELECT sfid, name, name__c, image__c, session_title__c FROM salesforce.Speaker__c ORDER BY name__c ASC', (err, result) => {
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
            client.query('SELECT id, name, time__c, duration__c, title__c, type__c, description__c, stars__c, speaker_name__c FROM salesforce.Session__c ORDER BY time__c ASC', (err, result) => {
                done();
                if(err){
                    console.error(err);
                    response.send("Error "+ err);
                }else{
                    response.send(result.rows);
                }
            });
        });
    });
    app.post('/rate', (request, response) =>{
        pg.connect(process.env.DATABASE_URL, (err, client, done) => {
            client.query(`UPDATE salesforce.Session__c SET stars__c = stars__c+1 WHERE id = ${request.body.id}`, (err, result) => {
                done();
                if(err){
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
            client.query(`INSERT INTO salesforce.Session_Feedback__c
                          VALUES (
                                  "Speaker__c": ${request.body.speaker},
                                  "Ocekivanja__c": ${request.body.expectation},
                                  "Pripremljenost__c": ${request.body.readiness},
                                  "Razumljivost__c": ${request.body.understandable},
                                  "Metod_predavanja__c": ${request.body.method},
                                  "Additional_Feedback__c": ${request.body.feedback}
                                )`, 
                (err, result) => {
                done();
                if(err){
                    console.error(err);
                    response.send("Error "+ err);
                }else{
                    response.send("OK");
                }
            });
        });
    });
}
app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});

