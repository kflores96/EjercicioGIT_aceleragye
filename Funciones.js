function saludar(){
    respuesta = promp("Hola, ¿Cómo estás?");
    if (respuesta == "Bien"){
        alert("Me alegro")
    } else {
        alert("Qué pena!")
    }
}

saludar()

//------ 

saludar = function(){
    respuesta = promp("Hola, ¿Cómo estás?");
    if (respuesta == "Bien"){
        alert("Me alegro")
    } else {
        alert("Qué pena!")
    }
}

saludar()

//----- 

function saludar(){
    alert("Hola");
    return Hola; // finaliza la función, retornandome un valor que pongamos.
}

let saludo = saludar();
console.log(saludo)

function suma(num1, num2){
    let opera = num1 + num2;
    console.log(opera);
}
suma(11,10)

// function como flecha =>

const saludar = nombre => { // se reemplaza la palabra funtion por la flecha y la ubica despues de los parentesis, el parentesis no se lo coloca si es solo un parametro, si hay mas, si se pone los ()
    let frase = "hola " + nombre + " ¿Cómo estás";
    console.log(frase)
}

saludar("Karla")

