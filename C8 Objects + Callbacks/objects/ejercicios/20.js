function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let sumaTotalLikes = 0;
  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    sumaTotalLikes += objetoUsuario.posts[i].likes;
  }
  return sumaTotalLikes;
}

module.exports = sumarLikesDeUsuario;
