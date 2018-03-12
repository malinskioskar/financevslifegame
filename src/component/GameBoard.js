import GameEvents from '../events/GameEvents';

const app = new PIXI.Application(1024, 768, {backgroundColor: 0x1099bb});

var totalRounds = 80;
var startingRound = 18;
var currentRound = 0;

var incomeBlock;
var expensesBlock;

var investmentButtons = [];

function GameBoard() {

   console.log("BLE1");
   window.document.body.appendChild(app.view);

   createClickNextRound();

   currentRound = startingRound;

   createInvestmentButtons(100, 100);
   createInvestmentButtons(100, 200);
}

function createInvestmentButtons(x, y){
   var investmentButton;
   investmentButton = new PIXI.Sprite(PIXI.Texture.WHITE);
   investmentButton.tint = 0xFFF00F;

   investmentButton.width = 150;
   investmentButton.height = 30;
   investmentButton.x = app.renderer.width / 2 + x;
   investmentButton.y = app.renderer.height / 2 + y;
   app.stage.addChild(investmentButton);
   investmentButtons.push(investmentButton);
}

function createClickNextRound() {
   var mainContainerSprite;
   mainContainerSprite = new PIXI.Sprite(PIXI.Texture.WHITE);

   mainContainerSprite.width = 100;
   mainContainerSprite.height = 30;
   mainContainerSprite.x = app.renderer.width / 2;
   mainContainerSprite.y = app.renderer.height / 2;

   mainContainerSprite.anchor.set(0.5);
   app.stage.addChild(mainContainerSprite);

   mainContainerSprite.tint = 0xFFFFFF;

   mainContainerSprite.interactive = true;
   mainContainerSprite.buttonMode = true;

   mainContainerSprite.on('pointerdown', onNextRoundDown)
   mainContainerSprite.on('pointerup', onNextRoundUp)
}

function onNextRoundDown() {
   console.log("NEXT_ROUND_BUTTON_DOWN");
   this.tint = 0x00FFFF;
}
function onNextRoundUp() {

   if (currentRound < totalRounds){
      currentRound++;
      console.log("NEXT_ROUND_BUTTON_UP")
      this.tint = 0xFFFFFF;
      console.log("YOU FINISHED GAME ROUND : " + currentRound);
   }
   else{
      console.log("GAME FINISHED");
   }


}

module.exports = GameBoard;