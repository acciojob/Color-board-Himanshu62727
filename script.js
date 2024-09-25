//your JS code here. If required.

const container = document.querySelector("#color-board");
const totalBoxes = 800;

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";
    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

// Create 800 boxes
for (let i=0; i < totalBoxes; i++) {
    const square = document.createElement('div');
    square.classList.add("square");

    // Hover effect to change background color
    square.addEventListener("mouseover", () => {
        const randomColor = getRandomColor();
        square.style.backgroundColor = randomColor;
        square.classList.add("hovered");

        // Remove the color after 1 second
        setTimeout(() => {
            square.style.backgroundColor = "";
            square.classList.remove("hovered");
        }, 1000);
    });

    container.appendChild(square);
}
