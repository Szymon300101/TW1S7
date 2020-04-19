let t=0;

function setup()
{
	createCanvas(windowWidth,windowHeight);
	background(0);
  colorMode(HSB,255);
  noFill()
  frameRate(500);
  
 
}

function draw()
{
  background(0,10);
  translate(width/2,height/2)
  //strokeWeight(2);
  rotate(t/100)
  for(let i=0;i<3;i++)
  {

    stroke(255,200,200);
    let x1=sin(t*9/7)+cos(t*20/9)/10
    let y1=cos(t/2)*1.1;
    //point(x1*100,y1*100);

    stroke(255);
    let x2=-cos(t/7*5)*1.1;
    let y2=sin(t)/2+cos(t*36/7)/10;
    //point(x2*150,y2*150);

    let z1=sin(t)+cos(t*4)/10;
    let z2=-cos(t);

    stroke(noise(t/10)*255,150,255,150);
    line(x1*200,y1*200,x2*300,y2*300);
    //triangle(x1*200,y1*200,x2*300,y2*300,x3*100,y3*100);

    t+=0.02
  }
  //if(t>25*TWO_PI) noLoop();
}