

var numeroCanciones=0;

class Cancion{
nombre;
duracion;
_ID;
genero;

constructor(nombre,duracion,genero){
    this.nombre= nombre;
    this.duracion = duracion;
    this._ID = numeroCanciones;
    numeroCanciones = numeroCanciones+1;
    this.genero = genero;
}
set id(id){
    console.log("Error");
}
}

class Reproductor {
    listadecanciones=[];
    actual;
    play=false;
    listaDePlayList=[];

    constructor(listadecanciones){
         this.listadecanciones = listadecanciones;
    }

    AgregarCanciones(Cancion){
        listaCancionesAfuera.push(Cancion);
        let reproductor = new Reproductor(listaCancionesAfuera);
        console.log(reproductor.listadecanciones);
        //debugger
    }
    MostrarCanciones(){
        let reproductor = new Reproductor(listaCancionesAfuera);
        console.log(reproductor.listadecanciones);
        //debugger
        for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
             console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
        }
    }
    SeleccionarCancion(id){
        let reproductor = new Reproductor(listaCancionesAfuera);
        console.log(reproductor.listadecanciones);

       for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
                if(reproductor.listadecanciones[fila]._ID==id){
                    console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
                    this.play=true;
                    console.log("play = true")
                }
       }
    }


    plays(){
        this.play=true;
        console.log("Escuchando música");
    }

    stop(){
        this.play=false;
        console.log("Reproductor en stop");
    }
    Buscar(nombre){
        let reproductor = new Reproductor(listaCancionesAfuera);
        console.log(reproductor.listadecanciones);
        let c = false

       for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
                if(reproductor.listadecanciones[fila].nombre==nombre){
                    console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
                    c=true;
                    console.log("Canción encontrada")
                }
       }
       if(c==false){
        console.log(" ID::  false  \n");
        }   

     }

     crearListaDeReproducion(nombre,numCanciones){
        // mostrar y Dividir la cadena "numCanciones" usando el carácter coma
        console.log("Id de canciones ingresadas: "+ numCanciones+"\n");
        let listaID = numCanciones.split(',');
        let cont=0;
        console.log(listaID.length);

        let reproductor = new Reproductor(listaCancionesAfuera);
        console.log(reproductor.listadecanciones);
        

        for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
            for (let lista = 0; lista < listaID.length; lista++) {

                if(listaID[lista]==reproductor.listadecanciones[fila]._ID){
                    let nombre = reproductor.listadecanciones[fila].nombre;
                    let duracion = reproductor.listadecanciones[fila].duracion;
                    let id = reproductor.listadecanciones[fila]._ID;
                    let genero = reproductor.listadecanciones[fila].genero;
                    let c = new Cancion(nombre,duracion,id,genero);
                    this.listaDePlayList.push(c);
                }
        }
    }
    console.log("Nombre: "+nombre+ "Nuevo listaDePlayList  "+JSON.stringify(this.listaDePlayList));
}

seleccionarPlaylist(nombre){
        console.log(this.listaDePlayList);
        let c = false

       for (let fila = 0; fila < this.listaDePlayList.length; fila++) {
                if(this.listaDePlayList[fila].nombre==nombre){
                    console.log("Nombre de cancion: "+ this.listaDePlayList[fila].nombre +"  ID::  "+this.listaDePlayList[fila]._ID +" \n");
                    c=true;
                    console.log("Canción encontrada")
                }
       }
       if(c==false){
        console.log(" ID::  false / No se ha encontrado ninguna canción  \n");
        }   
}

     imprimircatalogo(){
        let reproductor = new Reproductor(listaCancionesAfuera);
        console.log(reproductor.listadecanciones);
        //debugger
        for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
            console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +" Duración:" + reproductor.listadecanciones[fila].duracion +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
        }
     }
    
     verCatalogoDuracion(mayor){
        let reproductor = new Reproductor(listaCancionesAfuera);
        if(mayor=="true"){
        console.log("Lista NO ordenada.  \n");
        for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
            console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +" Duración:" + reproductor.listadecanciones[fila].duracion +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
         }
         console.log("Lista ordenada por campo duracion (De mayor a menor).  \n");
         reproductor.listadecanciones.sort(function(a, b){return b.duracion-a.duracion}); 
         for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
            console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +" Duración:" + reproductor.listadecanciones[fila].duracion +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
         }
        }
        if(mayor=="false"){
            console.log("Lista ordenada por campo duracion (De menor a mayor).  \n");
            reproductor.listadecanciones.sort(function(a, b){return a.duracion-b.duracion}); 
            for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
            console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +" Duración:" + reproductor.listadecanciones[fila].duracion +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
         }
        }
     }

     verCatalogoAlfabetico(mayor){
        let reproductor = new Reproductor(listaCancionesAfuera);
        if(mayor=="true"){
        console.log("Lista NO ordenada.  \n");
        for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
            console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +" Duración:" + reproductor.listadecanciones[fila].duracion +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
         }
         console.log("Lista ordenada p (De mayor a menor) en orden alfabetico.  \n");
         reproductor.listadecanciones.sort(); 
         for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
            console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +" Duración:" + reproductor.listadecanciones[fila].duracion +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
         }
        }
        if(mayor=="false"){
            console.log("Lista ordenada (De menor a mayor) en orden alfabetico.  \n");
            reproductor.listadecanciones.reverse(); 
            for (let fila = 0; fila < reproductor.listadecanciones.length; fila++) {
            console.log("Nombre de cancion: "+ reproductor.listadecanciones[fila].nombre +" Duración:" + reproductor.listadecanciones[fila].duracion +"  ID::  "+reproductor.listadecanciones[fila]._ID +" \n");
         }
        }
     }

}

var listaCancionesAfuera =[];
listaCancionesAfuera.push( new Cancion("Tarzan Boy", "1", "Disco"))
listaCancionesAfuera.push(new Cancion("Culture Club", "4", "Disco"));
listaCancionesAfuera.push(new Cancion("Maneater", "3", "Disco"));
listaCancionesAfuera.push(new Cancion("Self Control", "3", "Disco"));
listaCancionesAfuera.push(new Cancion("Like A virgin","5","Disco"));
listaCancionesAfuera.push(new Cancion("Papa don't preach","20","Disco"));
listaCancionesAfuera.push(new Cancion("Material girl","30","Disco"));
listaCancionesAfuera.push(new Cancion("Beat it","25","Disco"));
listaCancionesAfuera.push(new Cancion("Remember","10","Disco"));
listaCancionesAfuera.push(new Cancion("Radio Ga Ga","24","Disco"));
listaCancionesAfuera.push(new Cancion("Da ya think I'm sexy?","34","Disco"));
listaCancionesAfuera.push(new Cancion("Everybody wants to rule the worl","14","Disco"));
listaCancionesAfuera.push(new Cancion("Never give you up","27","Disco"));
listaCancionesAfuera.push(new Cancion("Radio Ga Ga","31","Disco"));

cod=0;
var menu;

	menu="MENU\n";
    menu+="1. Mostrar canciones\n";
	menu+="2. Seleccionar canciones x id\n";
    menu+="3. Agregar nueva cancion\n";
	menu+="4. Parar\n";
	menu+="5. Reproducir\n";
    menu+="6. Buscar canciones x nombre\n";
    menu+="7. Crear lista de reproducción\n";
    menu+="8. Seleccionar PlayList\n";
    menu+="9. Imprimir catálogo\n";
    menu+="10. Ver catálogo de duración\n";
    menu+="11. Ver catálogo alfabético\n";
	menu+="12. Cancelar\n";
	menu+="Ingrese una opcion\n";
	
    let r = new Reproductor(this.listaCanciones);
	do{
	    cod=parseInt(prompt(menu));

        if(cod==1){//Mostrar canciones
            r.MostrarCanciones();
        }
        if(cod==2){//Buscar canciones
            let id = prompt('Ingrese el ID de la canción:','');
            r.SeleccionarCancion(id);
        }
        if(this.cod==3){//Agregar Canciones
            let nombre = prompt('Ingrese NOMBRE de la canción:','');
            let duracion= prompt('Ingrese DURACION de la canción:','');
            let genero= prompt('Ingrese GENERO de la canción:','');
            let c = new Cancion(nombre,duracion,genero);
            r.AgregarCanciones(c);
        }
        if(cod==4){//Detener el reproductor de canciones
            r.stop();
        }
        if(cod==5){//Activar el reproductor de canciones
            r.plays();
        }
        if(cod==6){//Buscar canciones x nombre
            let nombre = prompt('Ingrese el NOMBRE de la canción:','');
            r.Buscar(nombre);
        }
        if(cod==7){//Crear lista de reproducción
            let nombre = prompt('Ingrese el NOMBRE de la canción:','');
            let numCanciones = prompt('Ingrese los nuemros de las canciones separados por coma:','');
            r.crearListaDeReproducion(nombre,numCanciones);
        }
        if(cod==8){//Seleccionar PlayList
            let nombre = prompt('Ingrese el NOMBRE de la canción:','');
            r.seleccionarPlaylist(nombre);
        }
        if(cod==9){// Imprimir catálogo
            r.imprimircatalogo();
        }
        if(cod==10){// Ver catálogo de duracion 
            let mayor = prompt('Ingrese true =(ordenar de mayor a menor) & false=(ordenar de menor a mayor) de la canción:','');
            r.verCatalogoDuracion(mayor);
        }
        if(cod==10){// Ver catálogo de duracion 
            let mayor = prompt('Ingrese true =(ordenar de mayor a menor) & false=(ordenar de menor a mayor) de la canción:','');
            r.verCatalogoDuracion(mayor);
        }
        if(cod==11){// Ver catálogo de duracion en orden verCatalogoAlfabetico 
            let mayor = prompt('Ingrese true =(ordenar de mayor a menor) & false=(ordenar de menor a mayor) de la canción en orden alfabetico:','');
            r.verCatalogoAlfabetico(mayor);
        }

	}while(this.cod!=12);







