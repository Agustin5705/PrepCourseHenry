function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  let numeroFaltanteTotal = 0;
  let ejemploNumeroComparadorTotal = 0;
  for (let i = 0; i < numeros.length; i++) {
    numeroFaltanteTotal += numeros[i];
  }
  for (let i = 1; i <= Math.max(...numeros); i++) {
    ejemploNumeroComparadorTotal += i;
  }
  if (
    ejemploNumeroComparadorTotal === numeroFaltanteTotal ||
    numeros.length === 0
  ) {
    return null;
  } else {
    return ejemploNumeroComparadorTotal - numeroFaltanteTotal;
  }
}

module.exports = encontrarNumeroFaltante;
