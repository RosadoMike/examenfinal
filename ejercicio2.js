function transformarYFiltrar() {
    const numeros = [1, 2, 5, 10, 15, 20, 25];
    const cuadradosMayoresDe20 = numeros.map(num => num * num).filter(numero => numero > 20);
    
    // Crear la tabla
    let tabla = "<table><caption>Arreglo</caption><tr><th>Numeros</th></tr>";
    cuadradosMayoresDe20.forEach((numero) => {
        tabla += `<tr><td>${numero}</td></tr>`;
    });
    tabla += "</table>";

    // Mostrar la tabla en el div resultado2
    document.getElementById('resultado2').innerHTML = tabla;
}
