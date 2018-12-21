//Порт WS сервера
let wsock = new WebSocket('ws://localhost:5000/');

//Получение JSON через WS
let getJSONws = () => {
    return new Promise(resolve => {
        wsock.onopen = () => {
            wsock.send("give_json");
            wsock.onmessage = event => {
                wsock.close();
                resolve(JSON.parse(event.data));
            };
        };
    });
}


//Асинхронная функция
async function start() {
    let json = await getJSONws();
    console.log('JSON файл: ', json)
}

start();