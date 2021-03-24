const fs =  require('fs');
const express = require('express');
const app = express();
const port = 8000;

var myJson = fs.readFileSync('./gamecards.json');

app.get('/', (requete, reponse) => {
    reponse.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
    reponse.end('Hello World !');
});

app.get('/cards', (requete, reponse) => {
    reponse.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
    reponse.end(myJson);
});

app.get('/cards/:id', (requete, reponse) => {
    let id = parseInt(requete.params.id);
    console.log(id);
    let copymJ = JSON.parse(myJson);
    let card = copymJ.find( card => card.id === id);
    reponse.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
    reponse.end(JSON.stringify(card));
});

app.put('/cards/:id', (requete, reponse) => {
    let id = parseInt(requete.params.id);
    console.log(id);
    let copymJ = JSON.parse(myJson);
    let card = copymJ.find( card => card.id === id);
    reponse.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
    reponse.end(JSON.stringify(card));
});







app.listen(port, () => console.log("Server start"));
/*
app.post();
app.put();
app.delete();
app.patch();
*/
