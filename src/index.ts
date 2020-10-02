import * as PIXI from "pixi.js";
const app = new PIXI.Application();
document.body.appendChild(app.view);
app.stage.addChild(
    new PIXI.Graphics().beginFill(0x00ffff).drawCircle(400, 300, 200)
);
console.log('pizda1');