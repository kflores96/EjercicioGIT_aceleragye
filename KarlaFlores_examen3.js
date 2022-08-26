var Array1 = [3, 2, 1, 1, 2, 3, 2, 3, 1];
var Array2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];


var suma = Array1.map((a, i) => a + Array2[i]);
var multi = Array1.map((a, i) => a * Array2[i]);
console.log(Array1);
console.log(Array2);
console.log(suma);
console.log(multi);

