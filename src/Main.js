import GameBoard from './component/GameBoard';

var gameBoard;

window.onload = function() {
    gameBoard = new GameBoard();
}

module.exports = gameBoard;