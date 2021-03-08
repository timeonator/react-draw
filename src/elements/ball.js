import { context, frameCount } from "../canvas"

class Ball {
    constructor (x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.vx = .5;
        this.vy = 1;
        this.radius = radius;
        this.color = "yellow";
    }

    draw(context,frameCount) {

        context.beginPath();
        // context.moveTo (100,100);
        // context.lineTo (100,140);
        // context.lineTo(140,140);
        // context.lineTo(140,100);
        // context.lineTo(100,100);
        // context.closePath();
        // context.beginPath();

      context.arc(this.x, this.y , this.radius, 0, Math.PI * 2, true);
      context.closePath(); 

      context.fillStyle = this.color;
      context.strokeStyle="red";

      context.stroke();
        context.fill();
    }
}

export default Ball;
 

