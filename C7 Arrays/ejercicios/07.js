function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  if (array.length < 2) {
    return array;
  } else {
    array.sort();
    return array;
  }
}

module.exports = ordenarArray;
