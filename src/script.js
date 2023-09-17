const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray; 

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80)*(canvas.width/80);
}

window.addEventListener("mousemove",
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);


class Particle{
    constructor(x, y, directionX, directionY, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        ctx.fillStyle = '#8C5523';
        ctx.fill();
    }

    update(){
        if (this.x > canvas.width || this)
    }
}