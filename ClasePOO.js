// ---- CLASE 
//Una plantilla para crear objetos. 

// ---- OBJETO 
//son resultados de la clase.

// ---- ATRIBUTO 
//propiedades que tiene el objeto.

// ---- METODO 
//las cosas que puede hacer un objeto.
//si esta dentro de una clase es un metodo.
//si esta fuera de la clase es una funcion.

// ---- CONSTRUCTOR
// construye las propiedades del objeto. obligatorio

// ---- INSTANCIACION 
// una clase esta instanciada.

class Animal {
    constructor(especie, edad, color){
        this.especie = especie; // con this selecciono el objeto, que va a ser igual a las propiedades que pongo en el constructor
        this.edad = edad;
        this.color = color
    }

    Edades(){
        if (edad <= 5 && this.especie == perro){
            return "Es un perro bebe";
        } else if (edad > 5 && edad < 10 && this.especie == perro){
            return "Es un perro joven";
        } else {
            return "Es un perro adulto";
        }
    } 
}

const perro = new Animal ("perro",3,"blanco","doberman"); 
const gato = new Animal ("gato",3,"blanco"); 
console.log(perro)
perro.Edades;

//No utiliza palabras reservadas 
// ------- ABSTRACCION
// intentar reducir o resumir el objeto, hacer que sea menos complejo.
//Ejemplo: auto - color y marca 

// ------- MODULARIDAD
// Separar un problema por partes para resolverlo.

// ------- ENCAPSULAMIENTO
// todos la informacion esten privados y no sean accesibles 
// desde otra parte del codigo facilmente.

// ------- POLIMORFISMO
//  como un objeto se comporta de manera distinta a un metodo. 
// capacidad que tiene un objeto para comportarse distinto ante sus propiedades.

//Usa palabras reservadas 
// ------- HERENCIA
// utilizamos la palabra extendes, una clase extendida o heredada.

// ------- METODOS ESTATICOS
// no se necesita que una clase se defina para ser creado.

class perro extends Animal{
    constructor..... etc 
}
static ladrar(){
    alert("WOW")
}

//sin definir el objeto como const perro = new perros("perro",3,"blanco","doberman"); 
perro.ladrar(); // se muestra solo el wow 

// ------- METODOS ACCESORES (GETTERS, SETTERS)
// GETTERS para obtener un valor.
// SETTERS para modificar o definir ese valor. 

class perros extends Animal { // herencia 
    constructor(especie, edad, color,raza){ // no hace falta colocar this ya que se esta heredando de la clase Animal
        super(especie, edad, color, raza ); // para llamar la clase Animal
        this.raza = null;  
    }
    set modificarRaza(newName){  // set modificar 
        this.raza = newName;
    }

    get getRaza(){ // get obtener el valor modificado
        return this.raza;
    }
}

const perro = new perros("perro",3,"blanco","doberman"); 

perro.modificarRaza = "Pedro";
document.write(perro.getRaza)