var ball, ballImg,paddle, paddleImg;
function preload() {
 ballImg = loadImage ("ball.png");
 paddleImg = loadImage ("paddle.png");
}
function setup() {
  createCanvas(400, 400);
 ball = createSprite(20,20,350,200);
  ball.addImage("ball", ballImg);
  ball.velocityY=5;
  ball.velocityX=9;
  paddle = createSprite(350,200,20,20);
  paddle.addImage("paddle", paddleImg);
}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle);
  
  if (ball.isTouching(paddle)){
  ball.bounceOff(paddle);
  ball.velocityY=random(1,20);
  }
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.y=paddle.y-20
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y=paddle.y+20
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}