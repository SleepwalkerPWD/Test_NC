let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

//Прямоугольник
context.fillRect(10, 25, 150, 100);

//Треугольник
function drawTriangle(x1, y1, x2, y2, x3, y3)
{
context.beginPath();
context.moveTo(x1, y1);
context.lineTo(x2, y2);
context.lineTo(x3, y3);
context.lineTo(x1, y1);
context.stroke();
}

drawTriangle(800, 30, 600, 140, 600, 30);

//Круг
context.beginPath();
context.arc(60, 540, 50, 0, 2*Math.PI, false);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();

//Квадрат
context.fillRect(680, 490, 100, 100);
