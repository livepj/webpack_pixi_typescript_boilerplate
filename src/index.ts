import * as PIXI from 'pixi.js'
const app = new PIXI.Application()
await app.init()
document.body.appendChild(app.canvas)
await PIXI.Assets.load('assets/hugh.png')
app.stage.addChild(PIXI.Sprite.from('assets/hugh.png'))