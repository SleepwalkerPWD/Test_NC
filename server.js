const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const jsonData = require('./videodata.json');

//WebSocket server
const WebSocket = require('ws');

//WS порт
let wsServer = new WebSocket.Server({ port: 5000 });

//WS событие
wsServer.on('connection', webs => {
    webs.on('message', message => {
        if(message === 'give_json') {
            fs.readFile('./videodata.json', 'utf8', function (err, data) {
                (err) ? webs.send('"Error"'): webs.send(data);
            });
        }
    })
});
console.log(`WebSocket Server на 5000 порту \n`);


//Server
let port = 8000;

let server = http.createServer();
server.on('request', request);
server.listen(port);
function request(request, response) {
    let store = 'jsonData';

    request.on('data', function(data) 
    {
        store += data;
    });

    request.on('end', function() 
    {  console.log(store);
        response.setHeader("Content-Type", "application/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.end(JSON.stringify(jsonData))
    });
 }  
 console.log('Сервер на 8000 порту');

// let server = http.createServer(function (req, res) {
			
// 	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// 	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
// 	res.end(JSON.stringify(jsonData));

// });

// server.listen(3000, '127.0.0.1');
// console.log('Сервер на 3000 порту');
