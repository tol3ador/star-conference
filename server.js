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

var dev = process.env.NODE_ENV != 'production';

if(dev){
    app.get('/speakers', (request, response)=>{
        response.send([{"full_name__c":"Nenad Maljugić","picture_path__c":null,"session_title__c":"Umbraco - Tip & Tricks"},{"full_name__c":"Milan Kosanović","picture_path__c":null,"session_title__c":"Visitor Pattern Explained"},{"full_name__c":"Ivana Tešanović","picture_path__c":null,"session_title__c":"Angular 2 Fundamentals & Best practices"},{"full_name__c":"Ognjen Stanić","picture_path__c":null,"session_title__c":"BDD & TDD kroz primere u C#"},{"full_name__c":"Dejan Ostojić","picture_path__c":null,"session_title__c":"HTTP Caching"},{"full_name__c":"Miroslav Stojaković","picture_path__c":null,"session_title__c":"Authentication & Authorization - oAuth2 and Open ID protocols (demonstration of implicit Flow)"},{"full_name__c":"Miroljub Enjaković","picture_path__c":"/servlet/servlet.FileDownload?file=00P0Y000008K7OlUAK","session_title__c":"MVC 5 - Custom model binding"},{"full_name__c":"Miloš Davidović","picture_path__c":null,"session_title__c":"Get Real(time) With Websockets"}])
    })
}else{
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
}
app.listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});

