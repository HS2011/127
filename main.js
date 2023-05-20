song = ""
song2 = ""
function preload(){
song = loadSound("music.mp3")
song2 = loadSound("music2r.mp3")
}
function setup(){
    drawingBoard = createCanvas(450, 400)
    drawingBoard.position(425,160)

    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 0, 0, 450, 400)
}