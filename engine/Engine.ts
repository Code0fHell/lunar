import { Firework } from "./Firework";

export class Engine {

  fireworks: Firework[] = [];

  constructor(public ctx: CanvasRenderingContext2D) {}

  // ⭐ spawn random auto fireworks
  spawnRandom() {
    this.fireworks.push(
      new Firework(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight / 2,
      )
    );
  }

  // ⭐ spawn khi click (FIX lỗi của bạn)
  spawnFirework(x:number,y:number,text?:string){
    this.fireworks.push(
      new Firework(x,y)
    );
  }

  loop = () => {

    this.ctx.fillStyle="rgba(0,0,0,0.2)";
    this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

    if(Math.random() < 0.05){
      this.spawnRandom();
    }

    this.fireworks.forEach(f => f.update());
    this.fireworks.forEach(f => f.render(this.ctx));

    requestAnimationFrame(this.loop);
  }
}
