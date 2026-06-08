function calcularDescuento (){

let precio = Number(document.querySelector("#precio").value);
let descuento = Number(document.querySelector('#descuento').value);

let valorDescuento = (precio * descuento) / 100 
let valorTotal = document.querySelector('h2')
valorTotal.innerText= 'TOTAL: $' + valorDescuento

}
