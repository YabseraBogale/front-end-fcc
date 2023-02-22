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
	
	background(0);
	
	
	let hr=hour()
	let min=minute()
	let sec=second()
	
	
	noFill()
	strokeWeight(8)
	fill(124,252,0)
	let arcsec=map(sec,0,59,0,360)
	arc(200,200,300,300,0,arcsec)
	
	
	fill(0,206,209)
	let arcmin=map(min,0,59,0,360)
	arc(200,200,250,250,0,arcmin)
	
	
	fill(255,20,147)
	let archr=map(hr%12,0,12,0,360)
	arc(200,200,200,200,0,archr)
	
	textSize(24)
	fill(255,20,147)
	text(hr%12+":", 150, 50);
	
	fill(0,206,209)
	text(min+":",180,51);
	
	fill(124,252,0)
	text(sec,220,52)
	
	
	
    
	
	
	}
