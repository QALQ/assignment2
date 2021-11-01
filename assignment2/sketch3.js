//This assignment use the code in class as basic, It also used the following code as reference//
//https://p5js.org/examples/math-map.html//

let video;
let pose;


function setup(){
createCanvas(640, 480);
noStroke();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)   
 
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
    console.log(poses);
    if( poses.length >0 ){
        pose = poses[0].pose;
    } 
    
} 

function draw(){
     
    background(22,53,206);
   
   


if(pose){
    fill(255,255,255);
    ellipse(640-pose.nose.x, 460, 10);
   
}    
if(pose){

    let c = map(pose.nose.x, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(640-pose.nose.x, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
}  
   
}  

