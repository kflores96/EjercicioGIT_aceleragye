/* let estudiante = { nombre: "karla", edad: 25 }; //JSON
console.log(estudiante.nombre);
console.log(estudiante["nombre"]); // otra forma de imprimir */

/* class estudiante { //declaracion de una clase 
//metodos 
    hablar(){
        console.log("Hola soy una personita")
    }
}

let estudiante1 = new estudiante("karla", "25"); // instanciar un objeto
estudiante1.hablar; */

// Declaracion de clase
class Animal {
    // metodos
    nombre;
    edad;
    cartillaDeVacunacion = {vacuna1:"v1", vacuna2:"v2"};
    hablar() {
        return "Tengo " + this.edad + " años y tengo mis vacunas " + this.cartillaDeVacunacion + " completas" ;
    }
    
    constructor(nombre= "nombre generico", edad = "sin definir") {
        this.nombre = nombre;
        this.edad = edad;
        console.warn("Ha nacido un animal y se llama " + this.nombre); // console.warn para que se muestre como advertencia 
    }
    
}
// Creacion de una instancia u objeto
const pato = new Animal("Donald",1);
console.log(pato.hablar());
const perro = new Animal();
console.log(perro.hablar());



