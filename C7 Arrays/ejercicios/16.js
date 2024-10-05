function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let indiceDeElemento = 0;
  let elementosMultiplicadosPorIndice = [];
  for (let i = 0; i < array.length; i++) {
    indiceDeElemento = array.indexOf(array[i]);
    elementosMultiplicadosPorIndice.push(array[i] * indiceDeElemento);
  }
  return elementosMultiplicadosPorIndice;
}

module.exports = multiplicarElementosPorIndice;
