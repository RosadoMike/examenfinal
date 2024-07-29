function agregarItem() {
    const lista = document.getElementById('lista');
    const nuevoItem = document.createElement('li');
    
    // Crear el contenido del nuevo ítem
    nuevoItem.textContent = 'Nuevo ítem ';
    
    // Crear el botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => nuevoItem.remove();
    
    // Agregar el botón al nuevo ítem y luego agregar el ítem a la lista
    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);
}
