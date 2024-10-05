function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let chequeoIgualdad = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      chequeoIgualdad += 0;
    } else {
      chequeoIgualdad += 1;
    }
  }
  if (chequeoIgualdad === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = todosIguales;
