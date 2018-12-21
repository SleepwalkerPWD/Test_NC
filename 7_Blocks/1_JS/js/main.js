// Центрирование

window.onload = function() {

		let square = document.querySelector('.child');
		console.log(square.style);
		square.style.position = 'absolute';
		square.style.margin = '0';
		square.style.marginRight = '-50%';
		square.style.top = '50%';
		square.style.left = '50%';
		square.style.transform = 'translate(-50%, -50%)';
}
