

export const  conexionApp=async({nombre='spider'})=>{
  console.log('antes de la busqueda archivo js',{nombre},'este es')
    //https://api.themoviedb.org/3/discover/movie?api_key=f5ad242c71cb8b82b55c9aca90f26fe4&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=Action

    //busqueda por nombre de pelicula
    //https://api.themoviedb.org/3/search/movie?query=${tipo}&api_key=f5ad242c71cb8b82b55c9aca90f26fe4

    //https://api.themoviedb.org/3/${tipo}/popular?api_key=f5ad242c71cb8b82b55c9aca90f26fe4&language=en-CO&page=1

    //funcional https://api.themoviedb.org/3/${tipo}/popular?api_key=f5ad242c71cb8b82b55c9aca90f26fe4&language=en-CO&page=1
    console.log(nombre)
    const Api_key ='f5ad242c71cb8b82b55c9aca90f26fe4';
    const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?query=${nombre}&api_key=f5ad242c71cb8b82b55c9aca90f26fe4`)
    const datos = await respuesta.json()
    console.log('mostrando la busqueda del archivo js..',datos.results)
    const array=datos.results.map((x)=>{
        return{
           nombre: x.poster_path,
           titulo:x.title,
           id:x.id
          
        }
         
        
    })
    
    
    return array;
}