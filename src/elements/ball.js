import { context, frameCount } from "../canvas"

class Ball {
    constructor (x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.vx = .5;
        this.vy = 1;
        this.radius = radius;
        this.color = "black";
    }

    draw(context,frameCount) {

        context.beginPath();

      context.arc(this.x, this.y , this.radius, 0, Math.PI * 2, true);
      context.closePath(); 

      context.fillStyle = this.color;
      context.strokeStyle="red";

      context.stroke();
        context.fill();
    }
}

export default Ball;
 

