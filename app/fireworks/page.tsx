"use client"

import { useEffect,useRef } from "react";
import { Engine } from "@/engine/Engine";
import WishPrompt from "@/components/WishPrompt";

export default function Fireworks(){

 const ref = useRef<HTMLCanvasElement>(null);

 useEffect(()=>{

   const canvas = ref.current!;
   const ctx = canvas.getContext("2d")!;

   const resize = () => {
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
   };

   resize();
   window.addEventListener("resize", resize);

   const engine = new Engine(ctx);
   engine.loop();

   // audio (browser cần user interaction)
   const audio = new Audio("/tet.mp3");
   audio.loop = true;

   const startAudio = () => {
     audio.play().catch(()=>{});
     window.removeEventListener("click",startAudio);
   };

   window.addEventListener("click", startAudio);

   return () => {
     window.removeEventListener("resize", resize);
     window.removeEventListener("click", startAudio);
   };

 },[]);

 return(
  <div className="bg-black h-screen overflow-hidden">

   <canvas ref={ref} className="fixed top-0 left-0 w-full h-full"/>

   <WishPrompt/>

  </div>
 );
}
