const whiteLamp = document.querySelector("#whiteLamp");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
        
    if(whiteLamp.src.includes('white_lamp')){
            whiteLamp.src = "img/yellow_lamp.png";
            button.textContent = "Spegni";
    } else {
            whiteLamp.src = "img/white_lamp.png";
            button.textContent = "Accendi";
    }
})
