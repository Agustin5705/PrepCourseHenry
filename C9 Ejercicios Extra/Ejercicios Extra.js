/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let objetoString = {};
  let stringSeparado = string.split("");
  for (let i = 0; i < stringSeparado.length; i++) {
    if (objetoString[stringSeparado[i]]) {
      objetoString[stringSeparado[i]] += 1;
    } else {
      objetoString[stringSeparado[i]] = 1;
    }
  }
  let objetoOrdenado = {};
  let clavesOrdenadas = Object.keys(objetoString).sort();
  clavesOrdenadas.forEach((clave) => {
    objetoOrdenado[clave] = objetoString[clave];
  });
  return objetoString;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let minusculas = [];
  let mayusculas = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      minusculas.push(string[i]);
    } else {
      mayusculas.push(string[i]);
    }
  }
  let stringOrdenado = mayusculas.join("") + minusculas.join("");
  return stringOrdenado;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let fraseSeparada = frase.split(" ");
  let fraseInvertida = [];
  for (let i = 0; i < fraseSeparada.length; i++) {
    let palabraInvertida = fraseSeparada[i].split("").reverse().join("");
    fraseInvertida.push(palabraInvertida);
  }
  return fraseInvertida.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroString = numero.toString();
  if (numeroString === numeroString.split("").reverse().join("")) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let stringModificado = string.split("");
  stringModificado = stringModificado.filter(
    (letra) => letra !== "a" && letra !== "b" && letra !== "c"
  );
  return stringModificado.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let arregloInterseccion = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      arregloInterseccion.push(array1[i]);
    }
  }
  return arregloInterseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
