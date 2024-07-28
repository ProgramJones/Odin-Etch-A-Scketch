let container = document.querySelector("#container");
let resize = document.querySelector("#resize");
let darken = document.querySelector("#darken");
let color = document.querySelector("#color");

function initializeGrid(gridSize = 16) {

    for (let i = 1; i <= gridSize; i++) {

        let innerContainer = document.createElement("div");
        innerContainer.className = "containerColumn";
        container.appendChild(innerContainer);

        for (let k = 1; k <= gridSize; k++) {
            let box = document.createElement("div");

            box.className = "box";
            box.setAttribute("id", `col${i}row${k}`);

            innerContainer.appendChild(box);
        }
    }

    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", colorBox);
    })

}

// function darkenBox() {
//     let rgb = this.style.backgroundColor;
//     console.log(typeof rgb)
//     let rgbRegEx = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
//     console.log(rgbRegEx)
//     let match = rgbRegEx.match(this.style.backgroundColor);
//     console.log(match)


//     console.log(match[1])

// }

function colorBox() {

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    this.setAttribute("style", `background-color: rgba(${r}, ${g}, ${b}, .5)`);
}

// darken.addEventListener("click", () => {
//     let boxes = document.querySelectorAll(".box");
//     boxes.forEach((box) => {
//         box.addEventListener("mouseenter", darkenBox);
//         box.removeEventListener("mouseenter", colorBox);
//     })
// })

color.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", colorBox);
        // box.removeEventListener("mouseenter", darkenBox);
    })
})

// The resize button resizes the grid of squares based off user input

resize.addEventListener("click", () => {

    let newGridSize;

    do {
        newGridSize = prompt("How many columns should the grid be?\nEnter one positive number that's less than 100");
    } while (!(newGridSize < 100))


    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    initializeGrid(newGridSize);
});


// Initializes the grid on page load
initializeGrid();
