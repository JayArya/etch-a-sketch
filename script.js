let cellColor = "black";
let isDrawable = true;

const gridContainer = document.querySelector(".grid-container");
const drawGrid = (gridSize) => {
  const cells = gridContainer.querySelectorAll("div");
  cells.forEach((div) => div.remove());
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize ** 2; i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "#FFFFFF";
    cell.classList.add("cell");
    cell.addEventListener("mouseover", getCellColor);
    gridContainer.insertAdjacentElement("afterbegin", cell);
  }
};

gridContainer.addEventListener("click", () => {
  isDrawable = !isDrawable;
});

drawGrid(16);
const redrawGrid = (gridSize) => {
  let gridCurrentSize = document.getElementById("grid-current-size");
  gridCurrentSize.innerHTML = gridSize;
  drawGrid(gridSize);
};

function getCellColor() {
  if (isDrawable) {
    if (cellColor != "random") this.style.backgroundColor = cellColor;
    else
      this.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}
function changeColor(color) {
  cellColor = color;
}

function resetGrid() {
  isDrawable = true;
  const cells = gridContainer.querySelectorAll("div");
  cells.forEach((div) => (div.style.backgroundColor = "white"));
}
