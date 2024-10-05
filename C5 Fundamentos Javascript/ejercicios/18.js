function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo:
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  let vocales = new Set(["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]);
  if (vocales.has(letra)) {
    return "Es vocal";
  } else if (letra.length !== 1) {
    return "Dato incorrecto";
  } else {
    return "Dato incorrecto";
  }
}

module.exports = esVocal;
