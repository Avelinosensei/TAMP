import { useState } from 'react';

function Home() {
   return (
      <div>
      <h5>Home5</h5>
      <contador/>
      <div>Teste</div>
   </div>
   )

}

function Contador() {
   const [Contador, setContador ]= useState(1);

   function adicionarContador() {
       setContador(contador + 1);
   }


   return (
       <div>
              <div>
              {contador}
          </div>


           <button onClick={adicionarContador}>Adicionar</button>
       </div>)
   }
export default Home
