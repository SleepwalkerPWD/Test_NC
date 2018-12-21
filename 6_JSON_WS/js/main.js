//Порт WS сервера
let wsock = new WebSocket('ws://localhost:5000/');

//Получение JSON через WS
let getJSONws = () => {
    return new Promise(resolve => {
        wsock.onopen = () => {
            wsock.send("give_json");
            wsock.onmessage = (event) => {
                wsock.close();
                resolve(JSON.parse(event.data));
            };
        };
    });
}


//Асинхронная функция
async function start() {
    let json = await getJSONws();

    json.categories.forEach(function(item, i, array){
         for (let key in item){
                let div = document.createElement('div');
                div.style.width = '100%';
                div.style.height = '100%';
                div.style.margin = '10px';
                div.style.color = '#0066FF';
                document.body.appendChild(div);
                div.innerHTML = (key + ' : ' + item[key]);
         }
    });
    console.log('JSON файл: ', json);
};


start();