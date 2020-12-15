import { useState } from 'react';

function Home() {
   return (
      <div>
      <h5>Home5</h5>
      <Contador/>
      <div>Teste</div>
   </div>
   )

}

function Contador() {
   const [Contador, setContador ]= useState(1);

   function adicionarContador() {
       setContador(Contador + 1);
   }


   return (
       <div>
              <div>
              {Contador}
          </div>


           <button onClick={adicionarContador}>Adicionar</button>
       </div>)
   }
export default Home
