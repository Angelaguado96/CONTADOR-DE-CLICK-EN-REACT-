import React from "react";
  import '../hoja-de-estilos/contador.css'

function Contador ({ numClics }){
        return(
              <div className='contador'>
           {numClics}
              </div>
        )
}
 export default Contador;