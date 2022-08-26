// 4.- Clases y herencia (40 pts)

class Persona {
    nombre = "";
    apellido = "";
    edad;

    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido =apellido;
        this.edad = edad;
    }
    
    getDetalle(){
        console.log(this.nombre, this.apellido, this.edad, this,tipo)
    }
}

class Empleado extends Persona {
    tipo= ""; 

    constructor(nombre,apellido,tipo){
        super(nombre,apellido,tipo);
        this.tipo = tipo;
    }

    getDetalle(){
        console.log(this.nombre, this.apellido, this.edad, this,tipo)
    }
}

class Nomina extends Empleado {
    
    Array = [this.nombre, this.apellido, this.edad, this.tipo];
    salario;
    constructor(nombre,apellido,tipo, salario){
        super(nombre,apellido,tipo, salario);
        this.salario;
    }
    
    pago(){
        sueldo1 = 500;
        sueldo2 = 250;
        dias = Math.random()*15;
            if (tipo === "C"){
                this.salario = dias * sueldo1;
                this.salario -= 0.13/100;
                console.log("El empleado de confianza tiene un sueldo de $" + this.salario + " por " + dias + " trabajados");
            } else if (tipo === "S"){
                this.salario = dias * sueldo2;
                this.salario -= 0.10/100;
                console.log("El empleado del sindicato tiene un sueldo de $" + this.salario + " por " + dias + " trabajados");
                } else {
                    alert ("No eres considerado en la nómina")
                } 
    }

    nomina(){
        console.log("El" + this.empleado + this.apellido + " con edad de " + this.edad + " de tipo " + this.tipo + " tiene un sueldo de $" + this.salario + " por " + dias + " trabajados");
    }
}

var nominaemple = new Nomina ("Karla", "Flores", 25, "C");
nominaemple.nomina();

