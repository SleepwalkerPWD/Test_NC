//Кнопка
const pointer = document.getElementById('button');
//Массив div элементов
const treeElements = document.querySelectorAll('section div');

// console.log(treeElements);

//Функция на кнопке
let randomOpen = function () {
	Array.from(treeElements).forEach( (item) => {
			
			let timer = setTimeout( () => {
				if(item.style.opacity == '0') {
					item.style.opacity = '1';
					item.style.transition = '1s';
					
			} else item.style.opacity = '0';
		}, 0);
	});
};


