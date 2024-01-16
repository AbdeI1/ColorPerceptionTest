let sq1 = document.getElementById("square1");
let sq2 = document.getElementById("square2");
let text = document.getElementById("score");
let score = 0;

let colors = ["#ff0000", "#0000ff"];

let params = new URLSearchParams(window.location.search);

let test = new Option().style;
test.color = params.get("color1");
if (test.color !== "") colors[0] = test.color;
test.color = params.get("color2");
if (test.color !== "") colors[1] = test.color;

sq1.style.backgroundColor = colors[0];
sq2.style.backgroundColor = colors[1];

colors[0] = sq1.style.backgroundColor;
colors[1] = sq2.style.backgroundColor;

sq1.onclick = () => {
  if (sq1.style.backgroundColor == colors[0]) {
    score++;
    text.innerText = score;
    text.style.color = "rgb(145, 195, 110)";
  } else {
    text.style.color = "rgb(224, 99, 94)";
  }
  if (Math.random() < 0.5) {
    sq1.style.backgroundColor = colors[0];
    sq2.style.backgroundColor = colors[1];
  } else {
    sq1.style.backgroundColor = colors[1];
    sq2.style.backgroundColor = colors[0];
  }
}

sq2.onclick = () => {
  if (sq2.style.backgroundColor == colors[0]) {
    score++;
    text.innerText = score;
    text.style.color = "rgb(145, 195, 110)";
  } else {
    text.style.color = "rgb(224, 99, 94)";
  }
  if (Math.random() < 0.5) {
    sq1.style.backgroundColor = colors[0];
    sq2.style.backgroundColor = colors[1];
  } else {
    sq1.style.backgroundColor = colors[1];
    sq2.style.backgroundColor = colors[0];
  }
}
