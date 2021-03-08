
class EllipticOrbit {
    constructor (cx,cy,a,b) {
        this.x = this.a * Math.cos(0);
        this.y = this.b * Math.sin(0);
 
            this.cx = cx;
            this.cy = cy;
            this.a = a;
            this.b = b;
    }
    // x=acos(t)  and y=bsin(t) 
    draw(context,frameCount){
    // if(frameCount == 0) {
    //     if (this.a > this.b) context.moveTo(this.a,0);
    //     else  context.moveTo(0,this.b);
    // } else {
        this.x = this.a * Math.cos(frameCount) + this.cx;
        this.y = this.b * Math.sin(frameCount) + this.cy;
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);
 
        this.x = this.b * Math.cos(frameCount) + this.cx;
        this.y = this.a * Math.sin(frameCount) + this.cy;
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);
 
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);

        this.x = 2/((this.b)^2-(this.a)^2) * (Math.sin(frameCount+Math.PI/4)*Math.cos(frameCount+Math.PI/4)) + this.cx;
        this.y = 2/((this.b)^2+(this.a)^2) * (Math.sin(frameCount+Math.PI/4)*Math.cos(frameCount-Math.PI/4)) + this.cy;
        // this.x = 1/((this.b)^2+(this.a)^2) * Math.sin(frameCount)*Math.cos(frameCount) + this.cy;
        // this.x = 1/((this.b)^2+(this.a)^2) * Math.sin(frameCount+Math.PI/4)*Math.cos(frameCount) + this.cy
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);
        context.strokeStyle = "blue";
        context.stroke();
    // }
    }   
}
export default EllipticOrbit;