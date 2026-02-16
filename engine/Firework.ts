import { Particle } from "./Particle";

export class Firework{

 particles=[];

 constructor(public x,public y){

   this.createShape();
 }

 createShape(){

   const type=Math.random();

   // circle
   if(type<0.25){

     for(let i=0;i<80;i++){

       const angle=Math.random()*Math.PI*2;
       const speed=Math.random()*5;

       this.particles.push(
         new Particle(this.x,this.y,
           Math.cos(angle)*speed,
           Math.sin(angle)*speed)
       );
     }

   } else if(type<0.5){

     // star
     for(let i=0;i<5;i++){
       const angle=(Math.PI*2/5)*i;
       this.particles.push(
         new Particle(this.x,this.y,
           Math.cos(angle)*6,
           Math.sin(angle)*6)
       );
     }

   } else if(type<0.75){

     // heart
     for(let t=0;t<Math.PI*2;t+=0.2){

       const x=16*Math.pow(Math.sin(t),3);
       const y=13*Math.cos(t)-5*Math.cos(2*t);

       this.particles.push(
         new Particle(this.x,this.y,x*0.3,-y*0.3)
       );
     }

   } else {

     // spiral
     for(let t=0;t<20;t++){

       const angle=t*0.3;

       this.particles.push(
         new Particle(this.x,this.y,
           Math.cos(angle)*t*0.2,
           Math.sin(angle)*t*0.2)
       );
     }

   }
 }

 update(){

   this.particles.forEach(p=>p.update());
   this.particles=this.particles.filter(p=>p.life>0);
 }

 render(ctx){

   this.particles.forEach(p=>p.render(ctx));
 }
}
