window.onload = function() {
	//Создание рандомного числа для цикла
	const randomNumber = Math.floor(Math.random() * 91) + 10;

	//Генерация цвета
	let getRandomColor = () => {
	    let color = '#';
	    for (let i = 0; i < 6; i++) {
	        color += (Math.random() * 16 | 0).toString(16);
	    }
	    return color;
	}

	//Добавление div в html
	for (let i = 0; i < randomNumber; i++) {
		let square = document.createElement('div');
		square.style.width = '100px';
		square.style.height = '100px';
		square.style.background = getRandomColor();
	 	document.body.appendChild(square);
 	}
}
