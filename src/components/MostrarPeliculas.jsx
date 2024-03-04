
import { useState, useEffect } from "react";
import { conexionApp } from "../conexiones/Api"
import { ShowMovie } from "./ShowMovie";


export const MostrarPeliculas=({view})=>{

    let conta=0;
   console.log('estamos dentro de la funcion Mostrar Peliculas',view);
 
    const [Mostrar, setMostrar]=useState([]);
    
   console.log('contador',conta)
      
    const datos=async()=>{    
         
        //console.log('estamos dentro de la funcion Async',view)
        const informacion= await conexionApp(view);
        //console.log('mostrando informacion',informacion)
        setMostrar(informacion);
       
        
}

useEffect(()=>{

    datos();
    conta =conta+1;
    console.log('cuantas veces entro aca',conta)
    
    
    },[]);
    
return(
     <>

   <h4>mostrando..</h4>
    
     <div className='card-grid'>
        {
            Mostrar.map((x)=>
            <ShowMovie 
            key={x.id}      
            {...x}            
            />
            )
        }
        
     </div>    
     
     </>
     


)



}