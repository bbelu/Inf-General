// Función principal para iniciar el informe (se puede ejecutar al tocar un botón si quieres)
function realizarInformeFeria() {
    
    // 1. Pedir y validar la cantidad de libros (Clase 09: Validación con while)
    let cantidadLibros = parseInt(prompt("¿Cuántos libros compró en la Feria del Libro?"));
    
    while (isNaN(cantidadLibros) || cantidadLibros <= 0) {
        cantidadLibros = parseInt(prompt("Dato inválido. Por favor, ingrese un número mayor a 0:"));
    }

    // 2. Inicializar variables para los patrones clásicos (Clase 09)
    let totalGasto = 0;          // Acumulador para la suma
    let precioMaximo = 0;        // Para el libro más caro (referencia inicial baja)
    let precioMinimo = Infinity; // Para el libro más barato (referencia inicial alta)

    // 3. Cargar los precios uno por uno sabiendo la cantidad exacta (Estructura for)
    for (let i = 1; i <= cantidadLibros; i++) {
        let precio = parseFloat(prompt("Ingrese el precio del libro número " + i + ":"));
        
        // Validación del precio de cada libro
        while (isNaN(precio) || precio <= 0) {
            precio = parseFloat(prompt("Precio inválido. Ingrese un valor mayor a 0 para el libro " + i + ":"));
        }
        
        // --- Aplicación de Patrones Clásicos ---
        totalGasto += precio; // Acumular total
        
        if (precio > precioMaximo) {
            precioMaximo = precio; // Actualizar máximo
        }
        
        if (precio < precioMinimo) {
            precioMinimo = precio; // Actualizar mínimo
        }
    }

    // 4. Calcular el promedio
    let promedioPrecio = totalGasto / cantidadLibros;

    // 5. Mostrar los resultados en la página (Modificando el contenedor que te pasé en el HTML)
    let contenedor = document.getElementById("resultado");
    
    contenedor.innerHTML = `
        <h3>Resultados del Informe:</h3>
        <p><strong>Total gastado:</strong> $${totalGasto.toFixed(2)}</p>
        <p><strong>Libro más caro:</strong> $${precioMaximo.toFixed(2)}</p>
        <p><strong>Libro más barato:</strong> $${precioMinimo.toFixed(2)}</p>
        <p><strong>Promedio por libro:</strong> $${promedioPrecio.toFixed(2)}</p>
    `;
}

// Ejecutamos la función para que arranque apenas cargue la página (o asóciala a un botón)
realizarInformeFeria();