let img;

function preload() {
    img = loadImage("billeder/de_smukke.jpg");
}

function setup() {
    w = img.width;
    h = img.height;
    createCanvas(w, h);
}

function draw() {
    image(img, 0, 0);
    text("hallo", 0, 0);
}