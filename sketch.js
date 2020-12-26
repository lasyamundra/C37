var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;


function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);
 
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background (247,202,220)

  if (playerCount === 4){
    game.update(1)
  }

  if (gameState === 1){
    clear();
    game.play();
  }
}
