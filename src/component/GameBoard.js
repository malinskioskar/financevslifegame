import GameEvents from '../events/GameEvents';

const app = new PIXI.Application(1024, 768, {backgroundColor: 0x1099bb});

function GameBoard() {

   console.log("BLE1");
   window.document.body.appendChild(app.view);

   createClickNextRound();
}

function createClickNextRound() {
   var mainContainerSprite;
   mainContainerSprite = new PIXI.Sprite(PIXI.Texture.WHITE);

   mainContainerSprite.x = app.renderer.width / 2;
   mainContainerSprite.y = app.renderer.height / 2;

   mainContainerSprite.anchor.set(0.5);
   app.stage.addChild(mainContainerSprite);

   mainContainerSprite.tint = 0xFFFFFF;

   mainContainerSprite.interactive = true;
   mainContainerSprite.buttonMode = true;

   mainContainerSprite.on('pointerdown', onButtonDown)
   mainContainerSprite.on('pointerup', onButtonUp)
}

function onButtonDown() {
   console.log("NEXT_ROUND_BUTTON_DOWN");
   this.tint = 0x00FFFF;
}
function onButtonUp() {
   console.log("NEXT_ROUND_BUTTON_UP")
   this.tint = 0xFFFFFF;
}

module.exports = GameBoard;