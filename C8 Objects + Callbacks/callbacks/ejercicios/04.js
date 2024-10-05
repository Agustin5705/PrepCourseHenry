function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retornar nada.
  // Tu código:
  sumaDeArrayOfNumbers = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sumaDeArrayOfNumbers += arrayOfNumbers[i];
  }
  cb(sumaDeArrayOfNumbers);
}

module.exports = sumarArray;
