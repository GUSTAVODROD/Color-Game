// DECLARACIONES------------------------------------------------------------------

let numSquare = 6

let colors = []

let pickedColor

let clickedColor

let cuadrados = document.querySelectorAll(".square")

let colorDisplay = document.getElementById("colorDisplay")

let mensaje = document.querySelector("#message")

let h1 = document.querySelector("h1")

let reinicio = document.querySelector("#reset")

let modo = document.querySelectorAll(".modo")

// MAIN------------------------------------------------------------------------

init()

reinicio.addEventListener("click", function(){

	reset()

})

// FUNCIONES------------------------------------------------------------------------------

function init(){

	selseccionModo()

	armadoCuadrados()

	reset()

}

function selseccionModo(){

	for(let i = 0; i < modo.length; i++){

		modo[i].addEventListener("click", function(){

			modo[0].classList.remove("selected")
			modo[1].classList.remove("selected")
			this.classList.add("selected")

			this.textContent === "EASY" ? numSquare = 3: numSquare = 6

			reset()
		})
	}
}

function armadoCuadrados(){

	for(let i = 0; i < cuadrados.length; i++){

		cuadrados[i].addEventListener("click", function(){

			clickedColor = this.style.background

			if(clickedColor === pickedColor){

                reinicio.textContent = "Play again"

				mensaje.textContent = "Correct!"

				changeColors(clickedColor)

                cambiarPointer("default")

			} else {

				this.style.background = "#232323"

				mensaje.textContent = "Try again"

			}
		})
	}
}



function reset(){
    
    changeColors("#232323")

    cambiarPointer("pointer")

    colors = generateRandomColors(numSquare)

	pickedColor = pickColor()

	colorDisplay.textContent = pickedColor

	for(let i = 0; i < cuadrados.length; i++){

		if(colors[i]){

			cuadrados[i].style.display = "block"

			cuadrados[i].style.background = colors[i]
        
		} else {

			cuadrados[i].style.display = "none"

		}
	}
    
}



function changeColors(clickedColor){

	for(let i = 0; i < cuadrados.length; i++){

		cuadrados[i].style.background = clickedColor

    }

    h1.style.background = clickedColor
    document.body.style.background= clickedColor
    reinicio.style.background= clickedColor

    for(let j = 0; j < modo.length; j++){

        modo[j].style.background= clickedColor

    }

}

function pickColor(){

	let random = Math.floor(Math.random() * colors.length)

	return colors[random]

}

function generateRandomColors(numSquare){

	let colors = []

	for(var i = 0; i < numSquare; i++){

		colors.push(randomColor())

	}
	return colors
}

function randomColor(){

	let r = Math.floor(Math.random() * 256)
	let g = Math.floor(Math.random() * 256)
	let b = Math.floor(Math.random() * 256)

    
    colorString= `rgb(${r}, ${g}, ${b})`
	return colorString
}


function cambiarPointer(estado){

    for(let i = 0; i < cuadrados.length; i++){

		cuadrados[i].style.cursor= estado

    }
}