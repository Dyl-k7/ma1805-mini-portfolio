function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 30, 60);


  //Title
  fill(255);
  textSize(18);
  textAlign(CENTER);
  text("Drawing", 200, 30);

  //Eyes
  fill(255, 80, 80);
  stroke(255); //Eye Outline colour
  strokeWeight(2); //Eye Outline thickness

  square(75, 100, 60);
  square(265, 100, 60);

  //Mouth
  fill(80, 255, 150);
  ellipse(200, 250, 180, 30);
}
