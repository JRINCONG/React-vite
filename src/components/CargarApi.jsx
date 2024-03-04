import { useState } from "react";
import { CargarPeliculas } from "./CargarPeliculas";


export const CargarApi=({Busqueda})=>{   




const [Tipo,setTipo]=useState([]);

   const OnchangeCambio=(Event)=>{

   Busqueda(Event.target.value);

   
      }
   
      const enviar=(Event)=>{
         Event.preventDefault();
        //Busqueda(Tipo)
        //cat=>[...cat,Tipo]
        //console.log('Este es el tipo...hijo',Tipo)
        
         
            }

            const Informacion=()=>{
                  return Tipo

            }

   return(

    <>
    <form onSubmit={enviar}>        
       <input         
       name="busqueda"
       placeholder="tipo de pelicula" 
       onChange={OnchangeCambio}        
       >     
        
     </input>
     <button>Consultar Pelicula</button>
       </form>

      
    
    </>


   )


}