/* Un Empleado se define con las propiedades nombre (cuyo valor por defecto es una cadena vacía), y un departamento (cuyo valor por defecto es "General").
Un Director está basado en Empleado. Añade la propiedad informes (cuyo valor por defecto es un array vacío).
Un Trabajador está basado también en Empleado. Añade la propiedad proyectos (cuyo valor por defecto es un array vacío).
Un Ingeniero está basado en Trabajador. Añade la propiedad maquina (cuyo valor por defecto es una cadena vacía) y sobreescribe la propiedad departamento con el valor "Ingeniería".
•	Crea un nuevo Ingeniero de la siguiente manera:
var arkaitz = new Ingeniero("Garro, Arkaitz",
                            ["xhtml", "javascript", "html5"],
                            "Chrome");
•	El operador new creará un objeto genérico y asignará a la propiedad __proto__ el valor de Ingeniero.prototype.
•	El operador new pasará el nuevo objeto creado al constructor de Ingeniero, como valor de la palabra reservada this.
•	El constructor crea una nueva propiedad llamada base para este objeto, y le asigna el valor del constructor Obrero. Esto convierte el constructor de Obreroen un método del objeto Ingeniero. El nombre baseno hace referencia a ninguna palabra reservada, es simplemente para hacer referencia al padre.
•	El constructor llama al método base, pasando como argumentos dos de sus argumentos ("Garro, Arkaitz" y ["xhtml", "javascript", "html5"]), además de la cadena de caracteres "Ingeniería". Indicar este parámetro fijo, hace que todos los objetos creados de tipo Ingeniero, tengan el mismo valor para la propiedad departamento, sobreescribiendo la el valor original de Empleado.
•	Al llamar al método base, JavaScript asocia la palabra reservada this al objeto creado en el paso 1. En consecuencia, la función Obrero pasa los valores "Garro, Arkaitz" y ["xhtml", "javascript", "html5"] al constructor de Empleado. Cuando se completa este paso, la función Obrero asigna el valor de los projectos a su propiedad.
•	Una vez finalizado el método base, el constructor de Ingeniero asigna el valor Chrome a la propiedad maquina.
•	Una vez finalizado el constructor, JavaScript asigna el nuevo objeto a la */

class Empleado {
        nombre = "";
        departamento = "General";

    constructor(nombre, departamento) {
        this.nombre= nombre;
        this.departamento=departamento;
    }
}

class Director extends Empleado {
    informes=[];

    constructor(nombre, departamento, informes){
        super(nombre,departamento, informes); // para llamar la clase del empleado
        this.informes=informes;
    }
}

class Trabajador extends Empleado {
    proyectos=[];

    constructor(nombre, departamento, proyectos){
        super(nombre, departamento, proyectos); // para llamar la clase
        this.proyectos=proyectos;
    }
}

class Ingeniero extends Trabajador { // una clase que extiende de trabajador
    maquina="";
    departamento="Ingenieria";

    constructor(nombre, departamento, proyectos, maquina){
        super(nombre, departamento, proyectos);
        this.maquina=maquina;
    }

    //metodo que permita imprimir los datos para
    mensaje(){
        console.log(this.nombre) + " del departamento de " + console.log(this.departamento) + " con los proyectos " + console.log(this.proyectos) + " maquina " + console.log(this.maquina); 
    }
}

var arkaitz = new Ingeniero ("Garro, Arkaitz", ["xhtml", "javascript", "html5"], "Chrome");
arkaitz.mensaje();