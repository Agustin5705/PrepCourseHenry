function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let stringsComienzanConA = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].startsWith("a")) {
      stringsComienzanConA.push(arrayOfStrings[i]);
    }
  }
  return stringsComienzanConA;
}

module.exports = filter;
