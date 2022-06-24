function preload()
{
    
}

function setup()
{
    createCanvas(500,600);  

    video= createCapture(VIDEO);
    video.hide();
} 

function draw()

{
    image(video,150,150,200,300);
    stroke(255,0,0);
    fill(0,0,255);
    circle(100, 100, 50);
    circle(400, 100, 50);
    circle(100, 500, 50);
    circle(400, 500, 50);
    stroke(205,0,0);
    fill(255,0,0);
    rect(125, 87.5, 250, 25);
    rect(125, 487.5, 250, 25);
    rect(87.5, 125, 25, 350);
    rect(387.5, 125, 25, 350);
}



function take_snapshot()
{
   save('yourimage.png');
}
