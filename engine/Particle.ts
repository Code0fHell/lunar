export class Particle {

 constructor(public x:number,
             public y:number,
             public vx:number,
             public vy:number,
             public life=1){}

 update(){

   this.vy += 0.15;

   this.x+=this.vx;
   this.y+=this.vy;

   this.life-=0.01;
 }

 render(ctx){

   ctx.globalAlpha=this.life;

   ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;

   ctx.fillRect(this.x,this.y,2,2);

   ctx.globalAlpha=1;
 }
}
