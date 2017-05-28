var isGameOver;
var player;
var playerImage;
var enemyImage;
var backgroundImage;
var enemy;

function preload(){
  playerImage = loadImage("https://cclind.github.io/images/parents.jpg");
 enemyImage = loadImage("https://cclind.github.io/images/midlifecrisisgame.PNG");
 backgroundImage = loadImage("https://cclind.github.io/images/ireland-walking-hiking-tour.jpg");
    
}

function setup() {
    isGameOver = false;
  createCanvas(850,600);
player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
  player.addImage(playerImage);
enemy = createSprite(width/2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 0.2;
}

function draw() {
    if (isGameOver) {
        gameOver();
        return;
      } else {
          if (enemy.overlap(player)) {
              isGameOver = true;
          }
      }
  background(backgroundImage);
      
     if(keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))){
      player.position.x += 2;
    }
    
    if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)){
      player.position.x -= 2;
    }
  
  enemy.position.y = enemy.position.y + 4;

  if (enemy.position.y > height) {
  enemy.position.y = 0;
  enemy.position.x = random(5, width-5);
    }

   drawSprites();
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
  text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
  if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-(playerImage.height/2);
    enemy.position.x = width/2;
    enemy.position.y = 0;
  }
}