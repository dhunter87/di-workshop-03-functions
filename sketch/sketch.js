function setup() {//defines the actions carried out by the setup function
  createCanvas(400, 400)//creates canvas to draw on
  background(0)//sets backround colour
}

function draw() {//defines the actions carried out by the draw function
  roof()
  house()
}
//x is an interger type and represents distance(in pixles) from the x axis
//y is an interger type and represents distance(in pixles) from the y axis
// size represents the length(in pixles) of the sides of the square/rectangle
//the square function takes three integers and passes the value of 'x' into the x variable of function rectangle. it repeats the process with y
//it then passes the size integer into both of the size integers of the rectangle function. 
function square(x, y, size) {
  rect(x, y, size, size)
}

function roof(x, y) {
  fill(255, 130, 0)//sets the colour of the drawings
  stroke(0)//sets the outline colour of the drawings
  triangle(0, 30, 40, 0, 80, 30)//defines the perameters of the triangle
  triangle(75, 30, 115, 0, 155, 30)
  triangle(150, 30, 190, 0, 230, 30)
}

function house(x, y) {
  square(5, 30, 70)//defines the perameters of the rectangle
}
function house(x, y, height, width) {
  rect(5, 30, 70, 70)//defines the perameters of the rectangle
 
}