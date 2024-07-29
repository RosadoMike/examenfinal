function ordenarPorPropiedad() {
    const objetos = [
        { nombre: 'Mari Luz', edad: 25 },
        { nombre: 'Lumberto', edad: 22 },
        { nombre: 'Casemiro', edad: 32 },
        { nombre: 'María', edad: 1 },
        { nombre: 'Gabo', edad: 65 },
        { nombre: 'Ivan', edad: 20 },
        { nombre: 'Avila', edad: 4 },
    ];

    const propiedad = 'nombre'; 

    // 'edad'
    objetos.sort((a, b) => a[propiedad] - b[propiedad]);

    // tabla
    let tabla = "<table><tr><th>Nombre</th><th>Edad</th></tr>";
    objetos.forEach(objeto => {
        tabla += `<tr><td>${objeto.nombre}</td><td>${objeto.edad}</td></tr>`;
    });
    tabla += "</table>";

    // Mostrar la tabla 
    document.getElementById('resultado5').innerHTML = tabla;
}
