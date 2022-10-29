// SELECT CVS
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// GAME VARS AND CONSTS
let frame = 0;

// DRAW
function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, cvs.width, cvs.height);
}

// UPDATE

function update() {}

// LOOP

function loop() {
  update();
  draw();
  frame++;

  requestAnimationFrame(loop);
}
loop();
