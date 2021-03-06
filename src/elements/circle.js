class Circle {
    constructor (x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xv =-.01
        this.yv = +.01
    }

    draw(context,frameCount){       
        context.beginPath();
        var radius = this.r; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = 2 * Math.PI// End point on circle
        var anticlockwise = true;
    
        context.arc(this.x, this.y, radius, startAngle, endAngle, anticlockwise);
        context.closePath();
        this.x += this.xv;
        this.y += this.yv;
        context.strokeStyle='Blue';
        context.stroke();
    }   
}
export default Circle;