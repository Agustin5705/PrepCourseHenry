function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let numerosSuma = 0;
  for (let i = 1; i <= n; i++) {
    numerosSuma += i;
    if (numerosSuma > 100) {
      break;
    }
  }
  return numerosSuma;
}

module.exports = sumarHastaNConBreak;
