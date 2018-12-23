const url = 'http://localhost:8000';

//Получение JSON через XHR
let loadWithXHR = () => {

    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.responseType = 'json';
        xhr.onload = (error) => {
            if (xhr.status !== 200) {
                return reject(error)
            }
            resolve(xhr.response);
        };
        xhr.send();
    });
};


////Async/await функция
async function start() {
    let json = await loadWithXHR();
    
    //Вывод JSON на страницу HTML
    json.categories.forEach(function(item, i, array){
         for (let key in item){
                let div = document.createElement('div');
                div.style.width = '100%';
                div.style.height = '100%';
                div.style.margin = '10px';
                div.style.color = 'red';
                document.body.appendChild(div);
                div.innerHTML = (key + ' : ' + item[key]);
         }
    });

    console.log('JSON файл: ', json);

};

start();