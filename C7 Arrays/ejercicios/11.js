function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let numerosDuplicados = [];
  for (let i = 0; i < array.length; i++) {
    numerosDuplicados.push(array[i] * 2);
  }
  return numerosDuplicados;
}

module.exports = duplicarElementos;
