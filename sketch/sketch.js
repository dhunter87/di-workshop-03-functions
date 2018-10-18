function setup() {//defines the actions carried out by the setup function
  createCanvas(400, 400)//creates canvas to draw on
  background(255)//sets backround colour
}

function draw() {//defines the actions carried out by the draw function
background(255)
house(5, 50, 70, 70)
house(85, 50, 80, 90)
house(180, 50, 40, 30)
  house(mouseX, mouseY, 180, 200)
}
//x is an interger type and represents distance(in pixles) from the x axis
//y is an interger type and represents distance(in pixles) from the y axis
// size represents the length(in pixles) of the sides of the square/rectangle
//the square function takes three integers and passes the value of 'x' into the x variable of function rectangle. it repeats the process with y
//it then passes the size integer into both of the size integers of the rectangle function. 
function square(x, y, size) {
  rect(x, y, size, size)
}

function roof(x, y, width) {
  fill(255, 130, 0)//sets the colour of the drawings
  stroke(0)//sets the outline colour of the drawings
  triangle(x, y, x + (width / 2 + 5), y - 30, x + (width + 10), y)//defines the perameters of the triangle

}

function house(x, y, width, height) {
  roof(x, y, width)
  rect(x + 5, y, width, height)//defines the perameters of the rectangle

}
