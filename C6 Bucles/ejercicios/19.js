function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let numerosDeSuma = 0;
  for (let i = 0; i <= n; i++) {
    numerosDeSuma += i;
  }
  return numerosDeSuma;
}

module.exports = sumarHastaN;
