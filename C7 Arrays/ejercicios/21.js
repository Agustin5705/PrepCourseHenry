function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesPresentes = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      mesesPresentes.push(array[i]);
    }
  }
  if (
    mesesPresentes.includes("Enero") &&
    mesesPresentes.includes("Marzo") &&
    mesesPresentes.includes("Noviembre")
  ) {
    return mesesPresentes;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
