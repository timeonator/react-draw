import React, { useRef, useEffect } from "react";
import Circle from "./elements/circle.js"
import Ball from "./elements/ball.js"
import EllipticOrbit from "./elements/elliptic-orbit.js";

export let context = {};
export let frameCount = 0;
let myCircle = new Circle(200,200,10);
let myOrbit = new EllipticOrbit(200,200,160,26);
let myBall = new Ball(200,200,15,"blue");

const Canvas = (props) => {
  const canvasRef = useRef(null);

  function clear(context) {
    context.fillStyle = 'rgba(255, 255, 255, 0.3)';
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
  }

  const draw = (context,frameCount) => {
    // if (frameCount%1== 0 ) clear(context);
    clear(context);
    myOrbit.draw(context,frameCount*.38);
    //  myCircle.draw(context,frameCount,{anticlockwise:true});
    myBall.draw(context,frameCount);
    myBall.radius = Math.random()*40;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext("2d");
    frameCount = 0;
    let animationFrameId;


    const render = () => {
      frameCount+=1;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} width={400} height={400} {...props} />;
};

export default Canvas;
