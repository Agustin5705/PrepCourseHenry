function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  if (array.length === 0) {
    return undefined;
  } else if (array.length === 1) {
    return array[0];
  } else {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }
}

module.exports = obtenerElementoAleatorio;
