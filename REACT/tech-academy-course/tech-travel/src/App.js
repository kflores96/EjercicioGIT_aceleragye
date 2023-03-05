
/*function App() {
  return (
    <h1>HOLA MUNDO!</h1>
  );
}

export default App;*/

/*--LISTA DINAMICA -- debo crear una carpeta con un archivo index Y EXPORTARLO AQUI CON IMPORT ... */

import ListOption from "./Components/ListOption";

/*--AÑADIR COLOR PERSONALIZADO*/

const customStyle = (backColor = '#9090ff') => ({
  backgroundColor: backColor,
  margin: '20px 30px'
})

/*--LISTA--*/

/* function App() {
  return (
    <ul>
      <ListOption style={customStyle('#750757')} tiempo= "Frio">Lunes</ListOption>
      <ListOption>Martes</ListOption>
      <ListOption style={customStyle()}>Miercoles</ListOption>
      <ListOption>Jueves</ListOption>
      <ListOption>Viernes</ListOption>
    </ul>
  );
}

export default App; */

/* USAR CLASES - CON LA PALABRA CLASSNAME 
   1. creao un nuevo archivo css
   2. lo importo en index
   3. utilizo esa clase dentro del codigo
   4. si tengo un customStyle y una clase, primero 
      toma el custom y no la clase.*/


function App() {
  return (
    <ul>
      <ListOption className="blue" tiempo= "Frio">Lunes</ListOption>
      <ListOption>Martes</ListOption>
      <ListOption>Miercoles</ListOption>
      <ListOption>Jueves</ListOption>
      <ListOption>Viernes</ListOption>
    </ul>
  );
}
export default App;

