const diam = 500;
const pointSize = 3;
let darts;
let inCircle;
let pie;
let output;

function initialize() {
    darts = 0;
    inCircle = 0;
    pie = 0;
    output = createDiv().style('font-size', '18pt');
}

function setup() {
    initialize();
    createCanvas(diam, diam);
    background('gray');
    strokeWeight(1);
    stroke('red');
    fill('white');
    circle(diam / 2, diam / 2, diam);
}

function draw() {
    generateDarts();
    output.html(`DARTS: ${darts} <br> PIE: ${nf(pie,1,5)}`);
}

function generateDarts() {
    let radius = diam / 2;
    let x = random(0, diam);
    let y = random(0, diam);
    let dartRadius = sqrt((x - radius) * (x - radius) + (y - radius) * (y - radius));
    // let dartRadius = dist(x, y, radius, radius);
    if (dartRadius < radius) {
        stroke('red');
        inCircle++;
    } else {
        stroke('black');
    }
    strokeWeight(pointSize);
    point(x, y);
    darts++;
    let ratio = inCircle / darts;
    pie = 4 * ratio;
}