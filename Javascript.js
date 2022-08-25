//-- EJERCICIO 1
/* 3 chicos entran a una heladería, pero hay un problema
los precios no estan al lado de cada estante con su respectivo helado.
Ellos quieren comprar el helado mas caro con la plata que tienen, asi que... 
Roberto tiene $1.5 USD
Pedro tiene $1.7 USD 
Cofla tiene $3 USD
Los precios de helado son los siguientes:
*Palito de helado de agua: $0.6 USD
*Palito de helado de crema: $1 USD
*Bombon helado marca heladix: $1.6 USD
*Bombon helado marca heladovich: $1.7 USD
*Bombon helado marca helardo: $1.8 USD
*Potecito de helado con confites: $2.9 USD 
*Pote de 1/4 kg: $2.9 USD 

SOLUCIONES
-Pedirles que ingresen el monto que tienen y
mostrarles el helado mas caro que puedan comprar.
-Si hay 2 o mas con el mismo precio, mostrar ambos.
-Cofla quiere saber cuanto es el vuelto.
*/

 let compraHelado = (n) => { // funcion 
    let dinero = prompt ("Dinero de " + n); // Ingreso dinero
    parseInt(dinero); // convertir "3" a 3 de cadena de texto a entero
    if (dinero >= 0.6 && dinero < 1) return (n + " : Helado de agua" + " y te sobran" + " $" + (dinero % 0.6));
    if (dinero >= 1 && dinero < 1.6) return (n + " : Helado de crema" + " y te sobran" + " $" + (dinero % 1));
    if (dinero >= 1.6 && dinero < 1.7) return (n + " : Helado de heladix" + " y te sobran" + " $" + (dinero % 1.6));
    if (dinero >= 1.7 && dinero < 1.8) return (n + " : Helado de heladovich" + " y te sobran" + " $" + (dinero % 1.7));
    if (dinero >= 1.8 && dinero < 2.9) return (n + " : Helado de helardo" + " y te sobran" + " $" + (dinero % 1.8));
    if (dinero >= 2.9 ) return (n + " : Helado de confites o pote de 1/4 kg" + " y te sobran" + " $" + (dinero % 2.9));
    else return ("Tienes " + n + " y no te alcanza para ningun helado");
 }

 console.log(compraHelado("Cofla"));
 console.log(compraHelado("Pedro"));
 console.log(compraHelado("Roberto"));

//---- EJERCICIO 2 

// Un joven muy afortunado logro ganar el primer premio de la loteria, para celebrar
// decide hacer una fiesta y para sus invitados, compro una maquina que deja:
// *Pasar solamente a los mayores de edad.
// *No paga la PRIMERA persona que entre despues de las 2 A.M

let gratis = false 
let fiesta = hora => {
    let edad = prompt ("¿Cuál es tu edad?");
    if (edad > 18) {
        if (hora >= 2 && hora < 7 && gratis) {
            alert("Puedes pasar, son las " + hora + "Hrs" + " la entrada es gratis");
            gratis = true; //Este sirve para validar que solo deje pasar a la primera persona gratis, si la segunda quiere pasar, no al deja. Solo a una persona y la primera que entre a las 2 a.m
        } else {
            alert("BIENVENIDO");
        }
        
    } else {
        alert("No puedes ingresar a la fiesta de adultos")
    }
}

fiesta(2);

//--- EJERCICIO 3

// Crear un nuevo sistema que registre asistencias:
// *Permitir registrar alumnos que esten presentes y ausentes.
// *Pasados los 30 dias, mostrar la situacion final de todos los alumnos (nro total de presentes y ausentes). 
// *Pueden tener max 10% de ausencias por semestre, si tienen mas estan reprobados.

let estudiantes = prompt("¿Cuantos estudiantes son en este curso");
let estuTotal = [];

for (i=0; i < estudiantes; i ++) {
    estuTotal[i] = [prompt("Nombre del alumno" + (i+1)),0];
}

const asistencia = (nombre,p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P" ) {
        estuTotal[p][1]++; // estamos seleccionando un elemento del array [1] que esta dentro de otro array [nombre]: Lucas,1
    }
}

for (i = 0; i < 30; i++){ // 30 dias de asistencias del mes.
    for (alumno in estuTotal){ // for in para ver la posicion
        asistencia(estuTotal[alumno][0],alumno);
    }
}

for (alumno in estuTotal){
    let resultado = estuTotal[alumno][0] + "= Presentes " + estuTotal[alumno][1] + ", Ausencias " + [30 - estuTotal[alumno][1]]; // para obtener el nombre, posicion
    if (30 - estuTotal[alumno][1] > 18){ // Solo puede tener 18 como maximo de presentes
     resultado+= "<b style= red> REPROBADO POR INASISTENCIAS </b><br><br>";
    } else {
        resultado+= "<br> <br>";
    }
    document.write(resultado);
}

//---- EJERCICIO 4

const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("¿Qué operación deseas realizar?");
let operacion = prompt("1: sumar, 2: resta, 3: dividir, 4: multiplicacion");

if (operacion == 1){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1, numero2)
    alert("Resultado: " + resultado);
}  

else if (operacion == 2){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = resta(numero1, numero2)
    alert("Resultado: " + resultado);
}  

else if (operacion == 3){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = dividir(numero1, numero2)
    alert("Resultado: " + resultado);
}  

else if (operacion == 4){
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = multiplicar(numero1, numero2)
    alert("Resultado: " + resultado);
} 

else {
    alert("No se ha encontrado la operacion")
}

//---- EJERCICIO 5

//un usuario entro a una tienda de celulares:
//le llamaron la atencion 3 celulares, pero no conocia del tema
//y nadie en la tienda lo ayudo a comprar uno.

//*crear un sistema para mostrarle las caract de cada celular.
//*cada celular debe tener un color, peso, resolucion de pantalla, resolucion de camara y memoria ram.
//*cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.

class Celulares {
    constructor(color, peso, pantalla, camara, ram){
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.ram = ram;
        this.encendido = false;
    }

    botonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido == true;
        } else {
            alert("El celular está apagado");
            this.encendido = false;
        }
    }
    
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
            this.encendido == true;
        } else {
            alert("El celular está apagado");
        }
    }
    
    tomarFoto(){
        alert("Foto tomada en una resolución de: " + this.camara);
    }

    grabarVideo(){
        alert("Grabando video en: " + this.camara);
    }

    mostrarInfo(){
        return `
        color: <b>${this.color}</b></br>
        peso:  <b>${this.peso}</b></br>
        pantalla: <b>${this.pantalla}</b></br>
        camara: <b>${this.camara}</b></br>
        ram: <b>${this.ram}</b></br>
        `;
    }
}

phone1 = new Celulares("rojo", "150g", "5'", "fullHD", "2GB");
//phone2 = new Celulares ("blanco", "140g", "6'", "HD", "128GB");
//phone3 = new Celulares ("negro", "100g", "8'", "fullHD4K", "256GB");

// celular1.mostrarInfo();
// celular1.botonEncendido();
// celular1.reiniciar();
// celular1.tomarFoto();
// celular1.grabarVideo();

document.write(`
    ${phone1.mostrarInfo()}
`);


https://www.youtube.com/watch?v=z95mZVUcJ-E