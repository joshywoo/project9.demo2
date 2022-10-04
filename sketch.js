
function setup() {
  createCanvas(700,600);

  ball = createSprite (350, 300, 80, 80)


}

function draw() 
{
  background("yellow");
 

if (keyDown ("right")) {
ball.x += 5
background ("orange")
}

if (keyDown ("left")) {
ball.x -= 5
background ("red")
}

if (keyDown ("up")) {
ball.y -= 5
background ("pink")
}

if (keyDown ("down")){
ball.y += 5
background ("white")
}
drawSprites () 
}




