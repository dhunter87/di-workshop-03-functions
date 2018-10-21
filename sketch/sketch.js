var x = 100
var y = 150
var xSpeed = 2
var ySpeed = 2

function setup() {
  createCanvas(300, 300)
}
function hitPaddle(x,y, mouseY)
{
  if (x == 10 && y > mouseY && y < mouseY + 50)
  {
    return true
  }
  else
  {
    return false
  }

}
function ballShouldBounce(x, y)
{
  if (x < 0 || x > 300) {
    xSpeed = xSpeed * -1
  } 
  else if (y < 0 || y > 300) {
    ySpeed = ySpeed * -1    
  }

}
function draw() {
  background(0)

  x = x + xSpeed
  y = y + ySpeed
  if (hitPaddle == true){
    ballShouldBounce(x,y)
  }

  if (ballShouldBounce(x, y)) {

  }
  rect(10,mouseY, 10, 50)
  ellipse(x, y, 10, 10)
  console.log(x,y)
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

