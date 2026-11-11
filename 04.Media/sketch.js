let img;

function preload() {
  img = loadImage("Earth.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 30, 60);

  //Draw the image
  image(img, 0, 0, 400, 400);

  //Title
  fill(255);
  textSize(18);
  textAlign(CENTER);
  text("Media", 200, 30);
  
}
