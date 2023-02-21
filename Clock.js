var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(400, 400);
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas();
}
let hour= hour();
let min= minute();
let sec= second();
function draw(){
	
	
	
	circle(10,10,10,10);
	fill(0)
	
	}

