alert("omg, welcome to my coffee shoop");


let respuesta = confirm('¿Querés continuar?');
let nombre = prompt('Ingresar nombre');
let darkmode = confirm ('¿Queres leer la guia en DarkMode?')
let titulo = document.querySelector('h1')
let body = document.querySelector('#contenedor')
let hora = prompt('¿Que hora es?')
let saludo = document.querySelector('p')

if(respuesta){
    
    titulo.innerText = '¡Hola! '+ nombre +' Bienvenidos a mi Guia para cafe.'
}

if(darkmode){
    body.style.backgroundColor='black'
    body.style.color='white'
    titulo.style.color='white'
    titulo.style.backgroundColor='black'
}


if (hora >= 6 && hora < 12) {
    saludo.innerText = '¡Buenos días!';
    
} else if (hora >= 12 && hora < 20) {
    saludo.innerText = '¡Buenas tardes!';
   
} else {
    saludo.innerText = '¡Buenas noches!';
  
}


