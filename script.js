const container = document.querySelector('#container');
const change = document.querySelector('#change');
let canvas = document.createElement('div');
let clicked = 1;
container.appendChild(canvas);

function randomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}


function createCanvas(noOfSquares) {
    let lengthOfEach = (960 / noOfSquares);
    canvas = document.createElement('div');
    for (i=1;i<=noOfSquares;i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.cssText = `height: ${lengthOfEach}px;`;
        for (j=1;j<=noOfSquares;j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener('mouseenter', () => {
                let rgb1;
                let rgb1pc10;
                let rgb2;
                let rgb2pc10;
                let rgb3;
                let rgb3pc10;
                if (clicked % 2 == 0 && !square.style.backgroundColor ) {
                    rgb1 = randomNumber(255);
                    rgb1pc10 = rgb1 / 10;
                    rgb2 = randomNumber(255);
                    rgb2pc10 = rgb2 / 10;
                    rgb3 = randomNumber(255);
                    rgb3pc10 = rgb3 / 10;
                    square.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
                } else if (clicked % 2 == 0 && square.style.backgroundColor) {
                    console.log(rgb1)
                    rgb1 = rgb1 - rgb1pc10;
                    console.log(rgb1)
                    rgb2 = rgb2 - rgb2pc10;
                    rgb3 = rgb3 - rgb3pc10;
                    square.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
                }
            });
            square.style.cssText = `width: ${lengthOfEach}px;`;
            square.addEventListener("click", () => {
                ++clicked;
            })
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
    container.appendChild(canvas);
}
change.addEventListener('click', squarechange);
let noOfSquares = 16;

function squarechange() {
    noOfSquares = Math.floor(+prompt("How many number of squares per side for the new grid?" , 16));
    while (!noOfSquares) {
        alert("Give a number!");
        noOfSquares = +prompt("How many number of squares per side for the new grid?" , 16);
    }
    while (noOfSquares >= 100) {
        alert("Too big!");
        noOfSquares = +prompt("How many number of squares per side for the new grid?" , 16);
    }
    container.removeChild(canvas);
    createCanvas(noOfSquares);
}