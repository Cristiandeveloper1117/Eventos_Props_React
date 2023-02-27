import logo from './logo.svg';
import './App.css';
// 1 IMPORTAMOS EL PRIMER COMPONENTE MICOMPONENTE
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';
// SI LE PONGO DEFAULT TENEMOS QUE UTILIZAR LAS LLAVES {}

function App() {
//VAMOS A PASAR ESTE OBJETO POR PROPS AL ATRIBUTO DE COMPONENTE TERCERCOMPONENTE
//DENTRO DE FICHA ENTRE  LLAVES {} SI PASAMOS VARIABLES VAN ENTRE LLAVES
//PODEMOS PASAR CUALQUIER TIPO DE INFORMACION DESDE EL COMPONENTE
//PADRE APP PASAMOS ESTE OBJETO A TERCER COMPONENTE
//Y LO RECIBIMOS COMO PROPS DENTRO DEL COMPONENTE HIJO TERCERCOMPONENTE
//COMO LAS PUEDO MOSTRAR EN PANTALLA VAMMOS A COMPONENTE.JS 


  const ficha_medica = {
    altura: "180 cm",
    grupo: "h+",
    estado: "recuperando",
    matricula: "medicoprivado"

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

{/*MI PRIMER COMPONENTE + COMENTARIO ENTRE {}*/}
<div className='componentes'>

 {/* <TercerComponente 
nombre= "Chloe Aitana valor dentro de tercer componente"
apellido="Unicornio ="
ficha= {ficha_medica}/> */} 
<hr/>
<EventosComponentes/>


<hr/>
<TercerComponente 
ficha= {ficha_medica}/>

<hr/>
<MiComponente/>

<hr/>
<SegundoComponente/>

</div>

</header>
      
    
</div>
  );
}

export default App;
