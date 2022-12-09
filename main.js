Harry_Potter_Song = "";
Peter_Pan_Song = "";

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function preload(){
    Peter_Pan_Song = loadSound("Peter_Pan.mp3");
    Harry_Potter_Song = loadSound("Harry_Potter.mp3");
}
