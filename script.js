const button = document.querySelector("button");
const width = window.innerWidth * 0.9;
const height = window.innerHeight * 0.9;

button.addEventListener("click", () => {
  let noOfSquares = parseInt(
    prompt("The number of squares per side for the new grid?")
  );
  if (!noOfSquares || noOfSquares < 1 || noOfSquares > 100) {
    alert("Please enter Positive integer between 1 and 100");
    return;
  } else {
    generateSquares(noOfSquares);
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateSquares(squares) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const size = Math.floor(Math.min(width, height) / squares);
  console.log(size);

  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < squares; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.width = `${size}px`;
      pixel.style.height = `${size}px`;

      let count = 0;
      pixel.addEventListener("mouseenter", () => {
        // pixel.style.backgroundColor = `rgba(${getRandomInt(
        //   255
        // )}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
        // let opacity = Number(pixel.style.opacity);
        // if (opacity === 0) opacity = 1;
        // opacity -= 0.1;
        // pixel.style.opacity = `${opacity}`;

        // different solution
        if (count < 10) {
          count++;
          pixel.style.backgroundColor = `rgba(${getRandomInt(
            255
          )}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
          pixel.style.opacity = 1 - 0.1 * count;
        }
      });
      row.appendChild(pixel);
    }
  }
}

generateSquares(16);
