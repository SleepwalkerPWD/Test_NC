//простой слайдер
// let width = 1280;
// let count = 1;

// let carousel = document.getElementById('carousel');
// let list = carousel.querySelector('ul');
// let listElements = carousel.querySelectorAll('li');

// let position = 0;

// let lis = document.getElementsByTagName('li');

// for (let i = 0; i < lis.length; i++) {
// 	lis[i].style.position = 'relative';
// 	let span = document.createElement('span');
// 	span.style.cssText = 'position:absolute;left:0;top:0';
// 	span.innerHTML = 1;
// 	lis[i].appendChild(span);
// }

// carousel.querySelector('.prev').onclick = function() {
// 	position = Math.min(position + width * count, 0);
// 	list.style.marginLeft = position + 'px';
// };

// carousel.querySelector('.next').onclick = function() {
// 	position = Math.max(position - width * count, -width * (listElements.length - count));
// 	list.style.marginLeft = position + 'px';
// };

// if (navigator.msMaxTouchPoints) {
//   $('#carousel').addClass('ms-touch');
// }

// if (navigator.msMaxTouchPoints) {
//   $('#carousel').addClass('ms-touch');

//   // Listed for the scroll event and move the image with translate.
//   $('#carousel').on('scroll', function() {
//     $('.slide-image').css('transform','translate3d(-' + (100-$(this).scrollLeft()/6) + 'px,0,0)');
//   });
// }
