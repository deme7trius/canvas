var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255, 0, 123, 0.5)';

function randomColor() {
    let el = '01234567ABCDEF';
    let pref = '#';
    for (let index = 0; index < 6; index++) {
        pref += el[Math.floor(Math.random() * 16)];
    }
    return pref;
}

function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        c.strokeStyle = 'white';
        c.fillStyle = randomColor();
        c.fill();
        c.stroke();
        }
    this.update = function() {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
        this.dy = -this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
    }
}
var circleArray = [];
for (let l = 0; l < 100; l++) {
    var radius = Math.floor(Math.random() * 30);
    var x = Math.random() * (innerWidth - radius*2) + radius;
    var y = Math.random() * (innerHeight - radius*2) + radius;
    var dx = (Math.random() - 0.5) * 20; 
    var dy = (Math.random() - 0.5) * 20;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (let index = 0; index < circleArray.length; index++) {
        circleArray[index].update();
        }
}
animate();