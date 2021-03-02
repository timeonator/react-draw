import React, { useRef, useEffect } from "react";
import Circle from "./elements/circle.js"

let myCircle = new Circle(100,100,25);

const Canvas = (props) => {
  const canvasRef = useRef(null);

  function clear(context) {
    context.fillStyle = 'rgba(255, 255, 255, 0.3)';
    context.fillRect(0,0,window.innerWidth,window.innerHeight);
  }

  const draw = (context,frameCount) => {
    clear(context);
    context.fillStyle = 'rgb(200, 0, 0)';
    context.fillRect(10, 10, 50, 50);
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fillRect(30, 30, 50, 50);
    context.strokeStyle='rgb(20,200,20)';
    myCircle.draw(context,frameCount);

  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
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
