import { Spine } from '@esotericsoftware/spine-pixi-v8'
import * as PIXI from 'pixi.js'

const app = new PIXI.Application()
await app.init()
document.body.appendChild(app.canvas)
app.stage.addChild(PIXI.Sprite.from(await PIXI.Assets.load('assets/hugh.png')))
PIXI.Assets.add({ alias: 'spineboyData', src: 'assets/spineboy-pro.skel' })
PIXI.Assets.add({ alias: 'spineboyAtlas', src: 'assets/spineboy-pma.atlas' })
await PIXI.Assets.load(['spineboyData', 'spineboyAtlas'])

//Create the spine display object
const spineboy = Spine.from({
    atlas: 'spineboyAtlas',
    skeleton: 'spineboyData',
    scale: 0.5
})

//Set the default mix time to use when transitioning
//from one animation to the next.
spineboy.state.data.defaultMix = 0.2

//Center the spine object on screen.
spineboy.x = app.screen.width / 2
spineboy.y = app.screen.height / 2 + spineboy.getBounds().height / 2

//Set animation "cape-follow-example" on track 0, looped.
spineboy.state.setAnimation(0, 'run', true)

//Add the display object to the stage.
app.stage.addChild(spineboy)