/* Arreglo de 2 dimensiones */
/* const carros = new Array("sab", "volvo", "bmw");
   for (let i = 0; i < carros.length; i++) {
      console.log(carros[i]);
}*/

 /* Multidimensionales */
/* var temperatura_medias_ciudad0 = new Array(3)
temperatura_medias_ciudad0[0] = 12
temperatura_medias_ciudad0[1] = 10
temperatura_medias_ciudad0[2] = 11

var temperatura_medias_ciudad1 = new Array(3)
temperatura_medias_ciudad1[0] = 5
temperatura_medias_ciudad1[1] = 0
temperatura_medias_ciudad1[2] = 2

var temperatura_medias_ciudad2 = new Array(3)
temperatura_medias_ciudad2[0] = 1
temperatura_medias_ciudad2[1] = 2
temperatura_medias_ciudad2[2] = 3

var arrayMuchasDimensiones = new Array(3)
arrayMuchasDimensiones[0] = temperatura_medias_ciudad0
arrayMuchasDimensiones[1] = temperatura_medias_ciudad1
arrayMuchasDimensiones[2] = temperatura_medias_ciudad2

console.log (arrayMuchasDimensiones[1][2]); 

for (i=0; i < arrayMuchasDimensiones.length; i++){
    for (j=0; j < arrayMuchasDimensiones[i].length; j++){
        console.log("Este es i: " + i + " J: " +j);
        console.log(arrayMuchasDimensiones[i][j]);
        arrayMuchasDimensiones[i][j] = arrayMuchasDimensiones[i][j] + 1;
        console.log(arrayMuchasDimensiones[i][j]);
    }
} */

/* FOR IN */
/* const cells = new Array ("samsung", "huawei", "iphone");

for (let cellUnico in cells) {
    console.log(cells[cellUnico]);
} */

// Ejemplo de como crear e invocar una función

// let x = miFuncion(4, 3);

/* function miFuncion(a, b) {
    return a * b;
}

console.log(x); */

// FUNCIÓN PRIVADA

/* function miFuncion(){
    let nombrecells = "samsung";
    console.log(nombrecells);
}

miFuncion(); */ 

// ANIDAR FUNCIONES

   /* function ShowMessage(FirstName) {
        function HolaMundo(){
            alert("Hola " + FirstName);
        }
        return HolaMundo();
    }

    ShowMessage("Karla"); */

    /* funciones flecha*/
   /* var suma = (x, y) => x + y;
    console.info( suma(2, 4)); */

    /* si no necesitamos parametros, tenemos que
    incluir el parentesis vacio */
    /* var hi = () => "Helo World";
    console.info(hi()); */

    /* Si necesitamos incluir varias instrucciones en 
    nuestra función, entonces necesitamos incluir las
    clásicas llaves y el retorno */
    var suma = (param1, param2) => {
        param1++; 
        param2++; 
        /* debugger */
        return param1 + param2;
    };
    console.log(suma(1,1));  /*solo imprime*/
    /* alert(suma(1,1));  imprime en consola*/



