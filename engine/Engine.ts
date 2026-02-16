import { Firework } from "./Firework";

export class Engine{

 fireworks=[];

 constructor(public ctx){}

 spawnRandom(){

   this.fireworks.push(
     new Firework(
       Math.random()*window.innerWidth,
       Math.random()*window.innerHeight/2
     )
   );
 }

 loop=()=>{

   this.ctx.fillStyle="rgba(0,0,0,0.2)";
   this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

   if(Math.random()<0.05){
     this.spawnRandom();
   }

   this.fireworks.forEach(f=>f.update());
   this.fireworks.forEach(f=>f.render(this.ctx));

   requestAnimationFrame(this.loop);
 }
}
