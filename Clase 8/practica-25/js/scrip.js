
function serieSugerida (){

let nombre = document.querySelector("#nombre").value;
let edad = Number (document.querySelector ('#edad').value)
let genero = document.querySelector("#genero").value;
let sugerido = document.querySelector('#sugerido')


if (edad <= 16 && genero == "terror"){
sugerido.innerText= nombre + 'Te recomiendo VHS'
}else {
sugerido.innerText= nombre + ' tenes menos de 16, no hay pelis que puedas ver'

}

    
}