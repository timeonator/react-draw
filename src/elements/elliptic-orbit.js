
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
        

        context.strokeStyle = "blue";
        context.stroke();
    // }
    }   
}
export default EllipticOrbit;