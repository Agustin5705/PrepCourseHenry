function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumaDeArrayOfNums = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    sumaDeArrayOfNums += arrayOfNums[i];
  }
  return sumaDeArrayOfNums;
}

module.exports = agregarNumeros;
