function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let primerMultiplo = 0;
  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
      primerMultiplo = secuencia[i];
      break;
    }
  }
  if (primerMultiplo === 0) {
    return undefined;
  } else {
    return primerMultiplo;
  }
}

module.exports = encontrarPrimerMultiploDeN;
