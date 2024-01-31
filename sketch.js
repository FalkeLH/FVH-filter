let img;
let pixelSize = 3; // SKal holdes lav for high resolution billeder af hensyn til fart

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
            let averageColor = [0, 0, 0];
            for (let _i = i - pixelSize; _i <= i + pixelSize; _i += pixelSize) {
                for (let _j = j - pixelSize; _j <= j + pixelSize; _j += pixelSize) {
                    averageColor = [averageColor[0] += getPixelValue(0, _i, _j),
                                    averageColor[1] += getPixelValue(1, _i, _j), 
                                    averageColor[2] += getPixelValue(2, _i, _j)];
                }
            }
            averageColor = [averageColor[0]/9,
                            averageColor[1]/9,
                            averageColor[2]/9];
            fill(averageColor);
            rect(i, j, pixelSize);
        }
    }
}

function getPixelValue(n,i,j){
    p = img.pixels[(i+w*j)*4+n];
    return p;
}