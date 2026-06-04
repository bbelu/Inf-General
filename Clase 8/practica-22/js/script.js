let numero = document.querySelector("#numero").value
let descuento = document.querySelector('#descuento').value
let total = (numero * descuento / 100)
let resultado = document.querySelector  ('h2')
    resultado.innerText= 'TOTAL: '+ total



