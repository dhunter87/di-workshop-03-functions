var x = 100
var y = 150
var speed = 2
var xSpeed = speed
var ySpeed = speed
var gameState = "game"
var score = 0

function setup() {
  createCanvas(300, 300)
}
function increaseSpeed(x){
  speed = speed + x
  xSpeed = speed
}
function ballShouldBounce(x, y, mouseY)
{ 
  if (x > 300) {
    xSpeed = xSpeed * -1
    return true
  }
  else if (y < 0 || y > 300) {
    ySpeed = ySpeed * -1    
  }
  else if (x <= 20 && y >= mouseY && y <= mouseY + 50){
    xSpeed *= -1
    score += 1
    if(score > 0 && score % 2 == 1){
      console.log("increase speed")
      increaseSpeed(1)
    }
  }
  else if(x < 0){
    gameState = "gameOver";
  }
}
function draw() {
  background(100)
  switch(gameState){
    case "game":

      x = x + xSpeed
      y = y + ySpeed
    
      if (ballShouldBounce(x, y, mouseY)) {
    
      }
      rect(10,mouseY, 10, 50)
      ellipse(x, y, 10, 10)
      text("Score : " + score, 230, 290)
      
      console.log(speed)

      return;
    case "gameOver":
      text("Game Over", 90, 100)
      textSize(20)
  }
}





// function ballShouldBounce()
// {
//   if (x < 0 || ballPosition < 0) {
//     speed = speed * -1
//   } else if (x > 300 || ballPosition > 100) {
//     speed = speed * -1
//   }
// }






// function setup() {//defines the actions carried out by the setup function
//   createCanvas(400, 400)//creates canvas to draw on
//   background(255)//sets backround colour
// }

// function draw() {//defines the actions carried out by the draw function
// background(255)
// house(5, 50, 70, 70)
// house(85, 50, 80, 90)
// house(180, 50, 40, 30)
//   house(mouseX, mouseY, 180, 100)
// }
//x is an interger type and represents distance(in pixles) from the x axis
//y is an interger type and represents distance(in pixles) from the y axis
// size represents the length(in pixles) of the sides of the square/rectangle
//the square function takes three integers and passes the value of 'x' into the x variable of function rectangle. it repeats the process with y
//it then passes the size integer into both of the size integers of the rectangle function. 
// function square(x, y, size) {
//   rect(x, y, size, size)
// }

// function roof(x, y, width) {
//   fill(255, 130, 0)//sets the colour of the drawings
//   stroke(0)//sets the outline colour of the drawings
//   triangle(x, y, x + (width / 2 + 5), y - (width / 2), x + (width + 10), y)//defines the perameters of the triangle

// }

// function house(x, y, width, height) {
//   roof(x, y, width)
//   rect(x + 5, y, width, height)//defines the perameters of the rectangle

// }

