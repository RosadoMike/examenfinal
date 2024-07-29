function filtrarMayoresDeEdad() {
    const personas = [
        { nombre: 'ermenegildo', edad: 17 },
        { nombre: 'Lupita', edad: 22 },
        { nombre: 'Casemiro', edad: 15 },
        { nombre: 'Martha', edad: 19 },
        { nombre: 'Melisa', edad: 157 },
        { nombre: 'Martha', edad: 8 }
    ];

    const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);

  
    let tabla = "<table><tr><th>Nombre</th><th>Edad</th></tr>";
    mayoresDeEdad.forEach(persona => {
        tabla += `<tr><td>${persona.nombre}</td><td>${persona.edad}</td></tr>`;
    });
    tabla += "</table>";

    
    document.getElementById('resultado1').innerHTML = tabla;
}
