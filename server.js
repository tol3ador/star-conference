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
    app.get('/speakers', (request, response)=>{
        response.send([{"full_name__c":"Nenad Maljugić","picture_path__c":null,"session_title__c":"Umbraco - Tip & Tricks"},{"full_name__c":"Milan Kosanović","picture_path__c":null,"session_title__c":"Visitor Pattern Explained"},{"full_name__c":"Ivana Tešanović","picture_path__c":null,"session_title__c":"Angular 2 Fundamentals & Best practices"},{"full_name__c":"Ognjen Stanić","picture_path__c":null,"session_title__c":"BDD & TDD kroz primere u C#"},{"full_name__c":"Dejan Ostojić","picture_path__c":null,"session_title__c":"HTTP Caching"},{"full_name__c":"Miroslav Stojaković","picture_path__c":null,"session_title__c":"Authentication & Authorization - oAuth2 and Open ID protocols (demonstration of implicit Flow)"},{"full_name__c":"Miroljub Enjaković","picture_path__c":"/servlet/servlet.FileDownload?file=00P0Y000008K7OlUAK","session_title__c":"MVC 5 - Custom model binding"},{"full_name__c":"Miloš Davidović","picture_path__c":null,"session_title__c":"Get Real(time) With Websockets"}]);
    });

    app.get('/sessions', (request, response)=>{
        response.send([{"session_title__c":"Angular 2 Fundamentals & Best practices","time__c":"9:00"},{"session_title__c":"Visitor Pattern Explained","time__c":"9:00"},{"session_title__c":"BDD & TDD kroz primere u C#","time__c":"9:00"},{"session_title__c":"Umbraco - Tip & Tricks","time__c":"9:00"},{"session_title__c":"Get Real(time) With Websockets","time__c":"9:15"},{"session_title__c":"HTTP Caching","time__c":"9:00"},{"session_title__c":"Authentication & Authorization - oAuth2 and Open ID protocols (demonstration of implicit Flow)","time__c":"9:00"},{"session_title__c":"MVC 5 - Custom model binding","time__c":"10:45"}]);
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
            client.query('SELECT time__c, duration__c, title__c, type__c, description__c, stars__c, speakers__c FROM salesforce.Session__c', (err, result) => {
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
}
app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});

