function setup() {//defines the actions carried out by the setup function
  createCanvas(400, 400)//creates canvas to draw on
  background(255)//sets backround colour
}

function draw() {//defines the actions carried out by the draw function
  fill(255, 130, 0)//sets the colour of the drawings
  stroke(0)//sets the outline colour of the drawings
  triangle(0, 30, 40, 0, 80, 30)//defines the perameters of the triangle
  square(5, 30, 70)//defines the perameters of the rectangle
}
function square(x, y, size) {
  rect(x, y, size, size)
}
