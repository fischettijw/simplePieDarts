const diam = 500;
const pointSize = 1;

let darts;
let dartBatch;
let inCircle;
let pie;
let outputDiv;
let seed;

function initialize() {
    darts = 0;
    inCircle = 0;
    pie = 0;
    outputDiv = createDiv().style('font-size', '18pt');
    dartBatch = 100;
    seed = null; // seed = 1;  ==>  3.14159 & 1356 darts    null ==> NO SEED
    randomSeed(seed); // randomSeed(1) 3.14159 & 1356 darts
}

function setup() {
    initialize();
    createCanvas(diam, diam);
    background('lightgray');
    strokeWeight(1);
    stroke('red');
    fill('white');
    circle(diam / 2, diam / 2, diam);
}

function draw() {
    generateDarts(dartBatch);
    output();
}

function generateDarts(n) {
    let radius, x, y, dartRadius, ratio;

    for (i = 0; i < n; i++) {
        radius = diam / 2;
        x = random(0, diam);
        y = random(0, diam);
        dartRadius = sqrt((x - radius) * (x - radius) + (y - radius) * (y - radius));
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
        ratio = inCircle / darts;
        pie = 4 * ratio;
        if (pie > 3.1414 && pie < 3.1417) { noLoop(); break; }
    }
}

function output() {
    outputDiv.html(`DARTS: ${darts} <br> PIE: ${nf(pie,1,5)}`);
}