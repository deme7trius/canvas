var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255, 0, 123, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "red";
// c.stroke();

// c.beginPath();
// c.arc(300, 300, 30, 0, 2 * Math.PI, false);
// c.strokeStyle = "green";
// c.stroke();

function randomColor(){
    let material = '0123456789ABCDEF';
    let preffix = '#';
    for (let m = 0; m < 6; m++) {
        preffix += material[Math.floor(Math.random() * 16 )];
    }
    return preffix;
}
// for (let i = 0; i < 100; i++) {
//     c.beginPath();
//     var x = Math.random()* window.innerWidth;
//     var y = Math.random()* window.innerHeight;
//     c.arc(x, y, 30, 0, 2 * Math.PI, false);
//     c.strokeStyle = randomColor();
//     c.stroke();
// }


var x = Math.random() * innerWidth;
var dx = 20;
var y = Math.random() * innerHeight;
var dy = 20;
function animation(){
    requestAnimationFrame(animation);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    if(x % 9){
        c.fillStyle = randomColor();
    }
    c.strokeStyle = "white";
    c.arc(x, y, Math.random() * 300, 0, 2 * Math.PI, false);
    c.fill();
    x +=dx;
    y +=dy;
    c.stroke();
    if(x + 30 > innerWidth || x - 30 < 0){
        dx = -dx;
    }    
    if(y + 30 > innerHeight || y - 30 < 0){
        dy = -dy;
    }
}
animation();