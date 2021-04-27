let x = 33;
let y = 60;
function setup(){
    createCanvas(500, 500);
    textSize(24);
    noStroke();
}

function draw(){
    background(204);
    fill(204, 120);
    rect(0, 0, width, height);
    fill(0);
    if((mouseX >= x) && (mouseX <= x + 55) && (mouseY >= y - 24) && (mouseY <= y)) {
        x+=random(-2, 2);
        y+=random(-2, 2);
    }
    text("avoid", width - mouseX, height - mouseY);
}
