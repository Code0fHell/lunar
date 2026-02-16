"use client"

import { useEffect, useRef } from "react";
import { Engine } from "../engine/Engine";

export default function FireworksCanvas(){

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Engine | null>(null);


  useEffect(()=>{

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const engine = new Engine(ctx);

    engineRef.current = engine;

    engine.loop(0);

    const click = (e:MouseEvent)=>{
      engine.spawnFirework(e.clientX,e.clientY,"Chúc mừng năm mới 🎆");
    };

    window.addEventListener("click",click);

    return ()=>window.removeEventListener("click",click);

  },[]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full"/>
}
