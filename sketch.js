var circle


function setup() {
  createCanvas(400,400);
  circle=createSprite(200,200,10,10);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)) {
    circle.position.x+=5
  }

  if(keyIsDown(LEFT_ARROW)) {
    circle.position.x-=5
  }

  if(keyIsDown(DOWN_ARROW)) {
    circle.position.y+=5
  }
  if(keyIsDown(UP_ARROW)) {
    circle.position.y-=5
  }



  drawSprites();

}




