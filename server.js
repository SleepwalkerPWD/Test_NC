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

console.log(`WebSocket на 5000 порту \n`);



//Server
let server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
	res.end(JSON.stringify(jsonData, null, 2));
});


server.listen(3000, '127.0.0.1');
console.log('Сервер на 3000 порту');

// console.log(jsonData);