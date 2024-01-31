let img;
let pixelSize = 10; // SKal holdes lav for high resolution billeder af hensyn til fart

function preload() {
    img = loadImage("billeder/de_smukke.jpg");
}

function setup() {
    w = img.width;
    h = img.height;
    createCanvas(2*w, h);
    noStroke();
    img.loadPixels();
}

function draw() {
    image(img, w, 0);
    myFilter();
    noLoop();
}

function myFilter() {
    console.log("Hallo")
    for (let i = 0; i < w; i += pixelSize) {
        for (let j = 0; j < h; j+= pixelSize) {
            console.log("test1");
            fill(getPixelValue(0,i,j),getPixelValue(1,i,j),getPixelValue(2,i,j));
            rect(i, j, pixelSize);
        }
    }
}

function getPixelValue(n,i,j){
    p = img.pixels[(i+w*j)*4+n];
    console.log(p);
    return p;
}