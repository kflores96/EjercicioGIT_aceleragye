class Persona {

    nombre = "";
    edad = 0;
    DNI = "";
    sexo = 'H';
    peso = 0;
    altura = 0;

    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;

        this._generaDNI();
    }

    calcularIMC() {
        var IMC = 0; // Formula de IMC
        IMC = this.peso / (Math.pow(this.altura, 2));


        // Si IMC Menor que 20 retorna -1
        if (IMC < 20) {
            return -1;
        }
        // Si es entre 20 y 25 retorna 0.
        else if (IMC >= 20 && IMC <= 25) {
            return 0;
        }
        // Si es mayor que 25 retorna 1.
        else {
            return 1;
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return true;
        }
        return false;
    }

    comprobarSexo(sexo) {
        if (sexo == this.sexo) {
            return true;
        }
        return false;
    }

    toString() {
        // return `Nombre: ${this._nombre} | Edad: ${this._edad} ...`;

        return "Nombre: " + this.nombre; // ... etc.
    }

    _generaDNI () {
        var dni = "";

        for (var i = 0; i < 8; i ++) {
            var num = Math.floor(Math.random() * 9);
            dni += '' + num;
        }

        this.DNI = dni;        
    }

}