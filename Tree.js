// sketch.js

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  let a = createA('http://github.com/YabseraBogale', 'By: Yabsera Bogale');
  a.position(x+150,y+400);
  a.style('color','white')
}

function setup() {
  
  cnv = createCanvas(400, 400);
  centerCanvas();
  angleMode(DEGREES)
  
 
}

function windowResized() {
  
  centerCanvas();

}

function draw(){
	
	background('black');
	translate(200,height);
	tree((windowHeight - height)/2);
	}

function tree(treeSize){
	
	let colors=['red','yellow','green','white']
	noFill();
	strokeWeight(4);
	//stroke(random(colors));
	stroke('white')
	//ellipse(0, treeSize, 5, 10)
	//circle(0,-treeSize,50);
	//triangle(0, 0, 0, 0, treeSize, -treeSize)
	//triangle(0, 0, 0, 0, -treeSize, treeSize)
	//triangle(0, 0, 0, 0, -treeSize, -treeSize)
	line(0,0,0,-treeSize)
	//arc(0, -treeSize, 10, 50, 0,45)
	translate(0,-treeSize);
	if(treeSize>4){
		push()
		rotate(45);
		tree(treeSize*0.57);
		pop()
		push()
		rotate(-45)
		tree(treeSize*0.57);
		pop()
		
	}
	
	
	

	}
