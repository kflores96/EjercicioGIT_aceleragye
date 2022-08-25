/* if */ 
let numero = 5;
let numero1 = "5";
if (numero === numero1){
    console.log("No es el mismo tipo de dato");
}

/* while */ 
let numero3 = 0;
while (numero3 < 1000) {
    numero3 ++;
    document.write(numero3 + "<br>")
    if (numero3 == 1000) {
        break;
    }
}

/* do while */
let numero4 = 0;
do {
    document.write(numero4);
    numero4 ++;
} 
while (numero4 <=5)

/* for */
// declarar
// inicializar 
// iterar 

for (var i = 0; i < 10; i++ ){
    documente.write(i + "<br>")
}

for (var i = 0; i < 10; i++ ){
    if (i == 12){
        break; // termina en 11 y el 12 no lo muestra
        continue; // avanza hasta el 11 y continua al 13, el 12 se lo salta 
    }
}

documente.write(i + "<br>")

 /* for in & for of */

 let animales = ["gato", "perro"];

 for (animal in animales){ // for in me muestra la posicion de los elementos dentro del arreglo
    console.log(animal);
 }

 for (animal of animales){ // for of me muestra los elementos dentro del arreglo
    console.log(animal);
 }

 //Array - bucles 

 array1 = ["karla", "Arianna"];
 array2 = ["Flores", "Torres"];

 Ejemplo: // Label, se crea una variable para que el break se ejecute en todo el for, no solo el de adentro.
 for (let array in array2){ // recorrer las posiciones de un arreglo
    if (array == 2){ // si la posicion es igual a 2
        for (let array of array1){ // recorrer los elementos del segundo array
            document.write(array + "<br>");
            break; // el break permite terminar con la ejecucion
            break Ejemplo; // label, el break solo termina en el ciclo donde se lo coloca, es decir no termina en todo el ciclo. 
        }
    } else {
        document.write(array2[array] + "<br>");
    }
 }

 