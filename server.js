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
        response.send("Mock: OK");
    });

    app.get('/speakers', (request, response)=>{
        response.send([{"name":"SP-012","name__c":"Dejan Ostojić","image__c":null},{"name":"SP-013","name__c":"Ivana Tešanović","image__c":null},{"name":"SP-014","name__c":"Milan Kosanović","image__c":null},{"name":"SP-015","name__c":"Milan Kosanović","image__c":null},{"name":"SP-016","name__c":"Miroljub Enjaković","image__c":null},{"name":"SP-017","name__c":"Miloš Davidović","image__c":null},{"name":"SP-018","name__c":"Nenad Maljugić","image__c":null},{"name":"SP-019","name__c":"Ognjen Stanić","image__c":null}]);
    });

    app.get('/sessions', (request, response)=>{
        response.send([{"time__c":"2017-11-04T09:00:00.000Z","duration__c":30,"title__c":"HTTP Caching","type__c":"Talk","description__c":null,"stars__c":0,"speakers__c":"a000Y00000InD8VQAV"},{"time__c":"2017-11-04T09:00:00.000Z","duration__c":30,"title__c":"Angular 2 Fundamentals & Best practices","type__c":"Talk","description__c":null,"stars__c":0,"speakers__c":"a000Y00000InD8aQAF"},{"time__c":"2017-11-04T09:00:00.000Z","duration__c":30,"title__c":"Visitor Pattern Explained","type__c":"Talk","description__c":null,"stars__c":0,"speakers__c":"a000Y00000InD8fQAF"},{"time__c":"2017-11-04T09:00:00.000Z","duration__c":30,"title__c":"Authentication & Authorization - oAuth2 and Open ID Protocols (demonstration of implicit Flow)","type__c":"Talk","description__c":null,"stars__c":0,"speakers__c":"a000Y00000InD8kQAF"},{"time__c":"2017-11-04T09:00:00.000Z","duration__c":30,"title__c":"MVC 5 – Custom model binding","type__c":"Talk","description__c":null,"stars__c":0,"speakers__c":"a000Y00000InD8zQAF"},{"time__c":"2017-11-04T09:00:00.000Z","duration__c":30,"title__c":"Get Real(time) With Websockets","type__c":"Talk","description__c":null,"stars__c":0,"speakers__c":"a000Y00000InD94QAF"},{"time__c":"2017-11-04T09:00:00.000Z","duration__c":30,"title__c":"Umbraco - Tip & Tricks","type__c":"Talk","description__c":null,"stars__c":0,"speakers__c":"a000Y00000InD9EQAV"},{"time__c":"2017-11-04T09:00:00.000Z","duration__c":30,"title__c":"BDD & TDD kroz primere u C#","type__c":"Talk","description__c":null,"stars__c":0,"speakers__c":"a000Y00000InD9JQAV"}]);
    });
}else{
    app.get('/speakers', (request, response) => {
        pg.connect(process.env.DATABASE_URL, (err, client, done) => {
            client.query('SELECT name, name__c, image__c FROM salesforce.Speaker__c', (err, result) => {
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
            client.query('SELECT id, time__c, duration__c, title__c, type__c, description__c, stars__c, speakers__c FROM salesforce.Session__c', (err, result) => {
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
}
app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});

