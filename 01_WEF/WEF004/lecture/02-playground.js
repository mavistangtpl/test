let ROW = 3;
let COL = 3;

let i = 0;

let code = "";

for (let row = 0; row < ROW; row++) {
  console.log(code);
  code += "<div class=row>";
  for (let col = 0; col < COL; col++) {
    code += '<div class="col">';
    i++;
    code += i;
    code += "</div>";
  }
  code += "</div>";
}

let playground = document.querySelector(".playground");
playground.innerHTML = code;

function placeObject(event) {
  let col = event.target;
  col.innerHTML = "X";
}

for (let col of playground.querySelectorAll(".col")) {
  col.addEventListener("click", (event) => {
    console.log(event.target);
    console.log("clicked");
  });
  col.addEventListener("click", placeObject);
}
