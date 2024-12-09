//your JS code here. If required.

// const container = document.querySelector(".container");
// for(let i=0; i<800; i++){
// 	const square = document.createElement("div")
// 	square.classList.add("square")
// 	square.addEventListener(⁠ mouseover ⁠, ()=>{
// 		const color = ⁠ #${Math.floor(Math.random()*16777215).toString(16)} ⁠
// 		        square.style.backgroundColor = color 
// 	})
// 							square.addEventListener("mouseout",()=>{
// 		setTimeout(()=>{
// 			square.style.backgroundColor = "rgb(29, 29, 29)"
// 		}, 800)
// 	})
	
// 	container.appendChild(square)
// }



let container = document.querySelectorAll(".container");
// console.log(container);



for (let i = 0; i < 800; i++) {
    let box = document.createElement("div");
    container[0].append(box);
    // box.style.cssText = "height: 20px; width: 20px;";
    box.className = "square"
}
let square = document.querySelectorAll(".square");

square.forEach((sq) => {
    sq.addEventListener("mouseover", () => {
        sq.style.backgroundColor =  randomColor();
        
        setTimeout(() => {
            sq.style.backgroundColor = '';
        }, 1000)
    })
})

function randomColor() {
    let letters = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}