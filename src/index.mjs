// Crear objetos de los libros
let libro1 = {
  titulo: "El Principito",
  autor: {
    nombre: "Antoine de Saint-Exupéry",
    nacionalidad: "Francés"
  }
};

let libro2 = {
  titulo: "Don Quijote de la Mancha",
  autor: {
    nombre: "Miguel de Cervantes",
    nacionalidad: "Español"
  }
};

// Crear un arreglo de libros
const arregloDeLibros = [libro1, libro2];

// forEach
console.log("Método 1: forEach - Autores de los libros");
arregloDeLibros.forEach((libro, indice) => {
  console.log(
    `Libro ${indice + 1}: Autor - ${libro.autor.nombre}, Nacionalidad - ${
      libro.autor.nacionalidad
    }`
  );
});

// map

const autoresConGenero = arregloDeLibros.map((libro) => ({
  ...libro,
  autor: {
    ...libro.autor,
    genero: "Masculino"
  }
}));

console.log("Arreglo de libros con autores y género:", autoresConGenero);
console.log("Arreglo original de libros:", arregloDeLibros);
console.log("Arreglo de libros con autores y género:", autoresConGenero);

// Filter
const librosAutoresMasculinos = autoresConGenero.filter(
  (libro) => libro.autor.genero === "Masculino"
);

console.log("Libros de autores de género masculino:", librosAutoresMasculinos);

