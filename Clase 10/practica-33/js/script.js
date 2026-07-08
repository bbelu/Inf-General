let corredores = []



document.getElementById("ingresar").addEventListener("click", function() {
    
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let numParticipante = document.getElementById("numParticipante").value
    let tiempo = document.getElementById("tiempo").value

    if (nombre === "" || apellido === "" || edad === "" || numParticipante === "" || tiempo === "") {
        alert("Completá todos los campos")
    } else {
        let corredor = {
        nombre: nombre, 
        apellido: apellido,
        edad: Number(edad),
        numParticipante: Number(numParticipante),
        tiempo: Number(tiempo)
    }
        corredores.push(corredor)
        document.getElementById("ingresoDatos").reset()

    }

})

document.getElementById("verResultados").addEventListener("click", function() {
    let ganador = corredores[0] 
  for (let i = 1; i < corredores.length; i++) {
    if (corredores[i].tiempo < ganador.tiempo) {
        ganador = corredores[i] 
    }
}

let sumaTiempos = 0

for (let i = 0; i < corredores.length; i++) {
    sumaTiempos = sumaTiempos + corredores[i].tiempo
}

let promedio = sumaTiempos / corredores.length


let masFuertes = 0

for (let i = 0; i < corredores.length; i++) {
    if (corredores[i].tiempo < promedio) {
        masFuertes++
    }
}

let porcentaje = (masFuertes * 100) / corredores.length

document.getElementById("resultados").innerHTML = "Ganador: " + ganador.nombre + " " + ganador.apellido + " - Tiempo: " + ganador.tiempo
document.getElementById("resultados").innerHTML += "<br>Promedio: " + promedio
document.getElementById("resultados").innerHTML += "<br>Porcentaje de corredores mas rapidos que el promedio " + porcentaje + "%"
})



