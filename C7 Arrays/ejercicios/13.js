function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let arrayPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayPares.push(array[i]);
    }
  }
  return arrayPares;
}

module.exports = filtrarNumerosPares;
