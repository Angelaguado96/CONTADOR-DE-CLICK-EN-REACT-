
import './App.css';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador';
import logoreact from './imagen/logo512.png'
 import { useState } from 'react';
  



function App() {

   const [numClics,setNumClics] = useState(0)

  const manejarClic = () => {
     setNumClics(numClics + 1);

  }
   const reiniciarContador = () => {
    setNumClics(0)
   };
  return (
    <div className="App">
      <div className='logo-de-react'>
        <img className='react-logo' src={logoreact} alt='logo-de.react'/>
      </div>
      <h1 className='title'>PROYECTOY CONTADOR REACT  </h1>
      <div className='contador-principal'>

        <Contador
        numClics ={numClics} />

         <Boton
         texto='Clic'
         esBotonDeClic={true}
         manejarClic={manejarClic}/>
         <Boton
         texto='Reiniciar'
           esBotonDeClic={false}
           manejarClic={reiniciarContador} 
           />

      </div>
     
    </div>
  );
}

export default App;
