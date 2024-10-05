function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let totalResultadosTest = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    totalResultadosTest += resultadosTest[i];
  }
  return totalResultadosTest / resultadosTest.length;
}

module.exports = promedioResultadosTest;
