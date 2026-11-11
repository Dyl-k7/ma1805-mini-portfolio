let i=0; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //Eyes
  fill(255, 0, 0.5)
  square(50, 50, 50)
  square(200, 50, 50)

  //Mouth
  fill(0, 255, 0, 255)
  ellipse(150, 150, i, 20)

  //Triangle(Growing nose)
  traingle(30, 75, 58, 20, 86, 75);

  //Increment i
  i = i+1;
}
