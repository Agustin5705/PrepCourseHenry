function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let multiplicadores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let resultadoTablaDelSeis = [];
  for (let i = 0; i < multiplicadores.length; i++) {
    resultadoTablaDelSeis.push((multiplicadores[i] *= 6));
  }
  return resultadoTablaDelSeis;
}

module.exports = tablaDelSeis;
