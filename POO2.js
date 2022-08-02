/* class Animal {

    ruido = "cuak cuak"

    constructor(n = "pato"){
        this.nombre = n;
    }

    quienSoy() {
        return "Hola, soy " + this.nombre;
    }

    meEscucho() {
        return "Yo hago " + this.ruido;
    }
}

class Gato extends Animal {
    meEscucho() {
        return super.quienSoy() + ' maullo';
    }
} */

/* let gato = new Animal();
   gato1.meEscucho(); */ // me ahorro de hacer esto y hago lo de abajo 

/*  console.log(new Animal().meEscucho());
   console.log(new Gato().meEscucho()); */

//------------------------

// Mi ejercicio 

class Animal {

        tipo;
        edad;
        peso;
        raza;
        ruido;

    constructor(tipo= "No definido", edad = "No definido", peso = "No definido", raza = "No definido", ruido = "No definido") {
        this.tipo = tipo;
        this.edad = edad;
        this.peso = peso;
        this.raza = raza;
        this.ruido = ruido;
        console.warn("Ha nacido un animal de raza " + this.raza + " con un peso de " + this.peso); 
    }

    Sonido() {
        console.log("Hola, yo hago " + this.ruido + "porque soy un(a) " + this.tipo);
    }

    Grasa() {
        console.log("Yo peso " + this.peso);
    }

}

const perro = new Animal("perro", 2, "1.5kg", "dalmata", "guauf");
perro.Sonido();
perro.Grasa();
const gato = new Animal("gato", 4, "2.5kg", "gato persa", "miaw");
gato.Sonido();
gato.Grasa();
const hamster = new Animal("hamster", 1, "0.5kg", "australiano", "sniff");
hamster.Sonido();
hamster.Grasa();
const pez = new Animal("pez", 1, "0.2kg", "guppy", "splash");
pez.Sonido();
pez.Grasa();


