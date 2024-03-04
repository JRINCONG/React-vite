import { useState } from "react";
import { CargarApi } from "./CargarApi";
import {conexionApp} from '../conexiones/Api';
import { MostrarPeliculas } from "./MostrarPeliculas";



export const CargarPeliculas=({Busqueda})=>{
 

    const [Peliculas, setPeliculas]=useState([Busqueda])



//setPeliculas(Peliculas=>[Peliculas,Busqueda]);

//console.log('Esta fue la busqueda..padre',Peliculas)




    
   


return(
        <>       
        <h1>Consulte su Pelicula</h1>
        <div>
            <CargarApi 
            Busqueda={setPeliculas}

             />
        </div>

        <MostrarPeliculas view={Peliculas}/>        
            
        </>
    )

}