
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

        context.translate(this.cx,this.cy);
        this.x = this.a * Math.cos(frameCount);
        this.y = this.b * Math.sin(frameCount);
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);
        
        context.rotate(Math.PI / 2);
        this.x = this.a * Math.cos(frameCount+Math.PI/2) ;
        this.y = this.b * Math.sin(frameCount+Math.PI/2) ;
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);

        context.rotate(Math.PI/4);

        this.x = this.a * Math.cos(frameCount);
        this.y = this.b * Math.sin(frameCount);
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);

        context.rotate(Math.PI/8);

        this.x = this.a * Math.cos(frameCount+Math.PI/4) ;
        this.y = this.b * Math.sin(frameCount+Math.PI/4) ;
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);

        context.rotate(Math.PI/16);

        this.x = this.a * Math.cos(frameCount+Math.PI/8);
        this.y = this.b * Math.sin(frameCount+Math.PI/8);
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);

        //context.rotate(Math.PI/2);

        this.x = this.a * Math.cos(frameCount+Math.PI/3) ;
        this.y = this.b * Math.sin(frameCount+Math.PI/3) ;
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true);

        context.rotate(Math.PI/32);

        this.x = this.a * Math.cos(frameCount) ;
        this.y = this.b * Math.sin(frameCount) ;
        context.moveTo(this.x,this.y);
        context.arc(this.x, this.y,4,0,Math.PI*2,true); 
      
        context.strokeStyle = "blue";
        context.stroke();
        context.setTransform(1, 0, 0, 1, 0, 0);
    // }
    }   
}
export default EllipticOrbit;