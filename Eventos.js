import Button from "./Button";

function Evento ({ valor })
{
   function meuPrimeiroEvento(){
    alert('Primeiro');
   }

   function meuSegundoEvento(){
    alert('Segundo');
   }

  return(
    <form>
    <div>
       <p>Clique para disparar um evento</p>      
       <Button event={meuPrimeiroEvento} text="Primeiro Evento"/>
       <Button event={meuSegundoEvento} text="Segundo Evento"/>

    </div>
    </form>
  )
}


export default Evento