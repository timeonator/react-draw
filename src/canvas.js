import React, { useRef, useEffect } from "react";
import Circle from "./elements/circle.js"
import Ball from "./elements/ball.js"
//import EllipticOrbit from "./elements/elliptic-orbit.js";
export let context = {};
export let frameCount = 0;
let myCircle = new Circle(150,80,17);
// let myOrbit = new ElipticOrbit(150,80,10,6);
let myBall = new Ball(90,90,20,"red");

const Canvas = (props) => {
  const canvasRef = useRef(null);

  function clear(context) {
    context.fillStyle = 'rgba(255, 255, 255, 0.3)';
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
  }

  const draw = (context,frameCount) => {
    clear(context);
   myCircle.draw(context,frameCount,{anticlockwise:true});
    myBall.draw(context,frameCount);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext("2d");
    frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
