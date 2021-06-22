function preload(){

}

function setup(){
canvas=createCanvas(300,300);
video=createCapture(VIDEO);
video.hide();
canvas.position(620,370);
classifier=ml5.imageClassifier("MobileNet" , modelloaded);
}

function draw(){
image(video,0,0,300,300);
classifier.classify(video , gotresults);
}

function modelloaded(){
    console.log("model is loaded");
}

function gotresults(error , results){
if(error)
{
    console.log(error);
}
else
{
    console.log(results);
    document.getElementById("Object").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}