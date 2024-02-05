colors = ['red', 'orange', 'yellow', 'lime', 'cyan', 'blue', 'magenta', 'brown', 'white', 'black'];
let curColor;

function setup() {
  createCanvas(400, 400);
  background(240, 240, 240);
  strokeWeight(10);
  curColor = 'white';
}

function draw() {
  noStroke();
  for (let i = 0; i < 10; i++) {
    fill(colors[i]);
    square(5, 5 + 20*i, 20);
  }  
  stroke(curColor);
  if (mouseIsPressed) {
    //if mouse is within palette
    if (mouseX > 5 && mouseX < 25 && mouseY < 200 && mouseY > 5) {
      //change color
      curColor = colors[(int) (mouseY / 20)];
      console.log(curColor);
    }  else {
      //draw
      console.log(curColor);
      stroke(curColor);
      strokeWeight(10);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}
